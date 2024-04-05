import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  bio: {
    type: String,
    required: true,
    trim: true,
  },
  contactInfo: {
    type: String,
    trim: true,
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

export default mongoose.model("Instructor", instructorSchema);
