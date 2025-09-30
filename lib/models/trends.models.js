import mongoose from "mongoose";

const CrimeTrendSchema = new mongoose.Schema(
  {
    month: {
      type: Number, // 1 = Jan, 2 = Feb, ...
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    totalReports: {
      type: Number,
      default: 0,
    },
    byType: {
      Robbery: { type: Number, default: 0 },
      Assault: { type: Number, default: 0 },
      Fraud: { type: Number, default: 0 },
      Theft: { type: Number, default: 0 },
      Other: { type: Number, default: 0 },
    },
    byLocation: [
      {
        location: String,
        count: Number,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.CrimeTrend ||
  mongoose.model("CrimeTrend", CrimeTrendSchema);
