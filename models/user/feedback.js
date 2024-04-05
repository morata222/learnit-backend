import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  rating: {
    type: Number,
    required: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  datePosted: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
});

export default mongoose.model("Feedback", feedbackSchema);
