import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    time: {
      type: Number,
      required: true,
    },
    videoId: {
      type: String,
      required: true,
      trim: true,
    },
    start: {
      type: String,
      default:'0',
      trim: true,
    },
    end: {
      type: String,
      default:"999999999999999999999999999",
      trim: true,
    },
    sectionID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "CourseSection",
    },
    quizID:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Lesson", lessonSchema);
