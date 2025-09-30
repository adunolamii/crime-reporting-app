// // import { NextResponse } from "next/server";
// // import { connectDB } from "@/lib/config/database";
// // import reportModels from "@/lib/models/report.models";
// // import trendsModels from "@/lib/models/trends.models";

// // export async function GET() {
// //   try {
// //     await connectDB();

// //     // Aggregation to get trends from reports
// //     const trends = await reportModels.aggregate([
// //       {
// //         $group: {
// //           _id: {
// //             year: { $year: "$uploadedAt" },
// //             month: { $month: "$uploadedAt" },
// //             type: "$crimeType",
// //             location: "$location",
// //           },
// //           count: { $sum: 1 },
// //         },
// //       },
// //       {
// //         $group: {
// //           _id: { year: "$_id.year", month: "$_id.month" },
// //           totalReports: { $sum: "$count" },
// //           byType: {
// //             $push: { type: "$_id.type", count: "$count" },
// //           },
// //           byLocation: {
// //             $push: { location: "$_id.location", count: "$count" },
// //           },
// //         },
// //       },
// //       { $sort: { "_id.year": -1, "_id.month": -1 } },
// //     ]);

// //     return NextResponse.json(trends);
// //   } catch (error) {
// //     console.error("❌ Error fetching crime trends:", error);
// //     return NextResponse.json(
// //       { error: "Failed to fetch crime trends", details: error.message },
// //       { status: 500 }
// //     );
// //   }
// // }
// import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/config/database";
// import reportModels from "@/lib/models/report.models";

// export async function GET() {
//   try {
//     await connectDB();

//     const trends = await reportModels.aggregate([
//       {
//         $group: {
//           _id: {
//             year: { $year: "$uploadedAt" },
//             month: { $month: "$uploadedAt" },
//             type: "$title",   // ✅ use title as crime type
//             location: "$location",
//           },
//           count: { $sum: 1 },
//         },
//       },
//       {
//         $group: {
//           _id: { year: "$_id.year", month: "$_id.month" },
//           totalReports: { $sum: "$count" },
//           byType: {
//             $push: { type: "$_id.type", count: "$count" }, // ✅ includes type now
//           },
//           byLocation: {
//             $push: { location: "$_id.location", count: "$count" },
//           },
//         },
//       },
//       { $sort: { "_id.year": -1, "_id.month": -1 } },
//     ]);

//     return NextResponse.json(trends);
//   } catch (error) {
//     console.error("❌ Error fetching crime trends:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch crime trends", details: error.message },
//       { status: 500 }
//     );
//   }
// }

// app/api/reports/route.js
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/config/database";
import reportModels from "@/lib/models/report.models";


