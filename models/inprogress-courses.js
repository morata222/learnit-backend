import mongoose from "mongoose";

const inProgressCourses = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  coursesInProgress:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InProgressCourse",
    },
  
  ]
});

const InProgressCourses = mongoose.model(
  "InProgressCourses",
  inProgressCourses
);
