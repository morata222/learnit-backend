import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    solvedBy:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      }
    ],
    lessonID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Lesson",
    },
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Quiz", quizSchema);
