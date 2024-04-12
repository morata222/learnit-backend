import mongoose from "mongoose";

const finalProjectSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  courseID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  projectName: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  projectRepoUrl: {
    type: String,
    required: true,
    trim: true,
  },
  projectStatus: {
    type: Boolean,
    required: true,
    trim: true,
  },
});

export default mongoose.model("FinalProject", finalProjectSchema);
