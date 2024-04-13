import mongoose from "mongoose";

const finalProjectSchema = new mongoose.Schema({
  courseID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Course",
  },
  projectName: {
    type: String,
    default: "Final Project",
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  projectDemoUrl: {
    type: String,
    trim: true,
  },

});

export default mongoose.model("FinalProject", finalProjectSchema);
