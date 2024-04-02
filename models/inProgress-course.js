import mongoose from "mongoose";

const InProgressCourse = new mongoose.Schema({
  courseID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  progress: {
    // number of lessons completed / total number of lessons
    type: Number,
    required: true,
  },
  lastAccessed: {
    type: Date,
    required: true,
  },
});

const CourseProgress = mongoose.model("InProgressCourse", InProgressCourse);
