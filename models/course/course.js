import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
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
      ref: "User",
    },
    subCategoryID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
    certificateID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Certificate",
    },
    totalRating: {
      type: Number,
      default: 0,
    },
    numRatings: {
      type: Number,
      default: 0,
    },
    averageRating: {
      type: Number,
      default: 0,
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
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Course", courseSchema);
