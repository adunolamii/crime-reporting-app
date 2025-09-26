import mongoose from "mongoose";

const crimeReportSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    filePath: { type: String, required: true },
    uploadedAt: { type: Date, default: Date.now },
  },
  { collection: "crimeReports" }
);

// Prevent model overwrite upon hot-reload in dev mode
export default mongoose.models.CrimeReport ||
  mongoose.model("CrimeReport", crimeReportSchema);
