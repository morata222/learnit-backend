import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  courseID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Course",
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  submissionUrl: {
    type: String,
    required: true,
    trim: true,
  },
  submissionDate: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Submission", submissionSchema);