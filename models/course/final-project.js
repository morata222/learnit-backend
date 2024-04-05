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
  instructorID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Instructor",
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

const FinalProject = mongoose.model("FinalProject", finalProjectSchema);
