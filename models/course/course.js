import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  instructorID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Instructor",
  },
  categoryID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  certificateID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Certificate",
  },
  rating: {
    type: Number,
    required: true,
  },
  recommendationID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recommendation",
  },
  courseSections: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CourseSection",
    },
  ],
  numberOfLessons: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Course", courseSchema);
