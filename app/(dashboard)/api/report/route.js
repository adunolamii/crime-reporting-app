import { NextResponse } from "next/server";
import { connectDB } from "@/lib/config/database";
import reportModels from "@/lib/models/report.models";
import fs from "fs";
import path from "path";
import formidable from "formidable";
import { writeFile } from "fs/promises";

connectDB();
export const config = {
  api: {
    bodyParser: false, 
  },
};

export async function POST(req) {
  try {
    await connectDB();

    
    console.log("Incoming headers:", req.headers);

    
    const formData = await req.formData();

     const entries = {};
    for (const [key, value] of formData.entries()) {
      if (typeof value === "object" && value.name) {
        entries[key] = `File: ${value.name}`;
      } else {
        entries[key] = value;
      }
    }
    console.log("Parsed FormData entries:", entries);

    const title = formData.get("title");
    const description = formData.get("description");
    const location = formData.get("location");
    const file = formData.get("file");

    if (!title || !description || !location || !file) {
      return new Response(
        JSON.stringify({
          error: "All fields (title, description, location, file) are required",
          received: entries, // ✅ show what was received
        }),
        { status: 400 }
      );
    }

    // Save uploaded file to /public/uploads
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = `/uploads/${Date.now()}-${file.name}`;
    await writeFile(`./public${filePath}`, buffer);

    // Save in DB
    const report = new reportModels({
      title,
      description,
      location,
      filePath,
    });

    await report.save();

    return new Response(
      JSON.stringify({
        message: "Crime report submitted successfully",
        report,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ Error submitting report:", error);
    return new Response(
      JSON.stringify({ error: "Failed to submit report", details: error.message }),
      { status: 500 }
    );
  }
}

// ✅ GET all reports
export async function GET() {
  try {
    await connectDB();

    const reports = await reportModels.find().sort({ uploadedAt: -1 });

    return NextResponse.json(reports);
  } catch (error) {
    console.error("❌ Error fetching reports:", error);
    return NextResponse.json(
      { error: "Failed to fetch reports", details: error.message },
      { status: 500 }
    );
  }
}