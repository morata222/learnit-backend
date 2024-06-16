import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },
    answers: {
      type: Array,
      trim: true,
      required: true,
    },
    answer: {
      type: Number,
      trim: true,
      required: true,
    },
    choosenAnswer: {
      type: Number,
      default: -1,
    },
    quizID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Quiz",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Question", questionSchema);
