import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  teacher: String,
  feedbackType: { type: String, enum: ["feedback", "problem"] },
  message: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Feedback", feedbackSchema);
