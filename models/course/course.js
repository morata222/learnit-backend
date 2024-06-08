import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
      trim: true,
    },
    students: {
      type: Number,
      default: 0,
    },
    language: {
      type: String,
      required: true,
      trim: true,
    },
    numberOfLessons: {
      type: Number,
      required: true,
    },
    totalVideoTime: {
      type: Number,
      required: true,
    },
    courseLevel: {
      type: String,
      required: true,
      trim: true,
    },
    pointsToUnlock: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    bannerImage: {
      type: String,
      required: true,
      trim: true,
    },
    instructorID: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: "User",
    },
    subCategoryName: {
      type: String,
      required: true,
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
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Course", courseSchema);
