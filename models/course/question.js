import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true,
  },
  options: {
    type: Array,
    trim: true,
    required: true,
  },
  correctAnswer: {
    type: String,
    trim: true,
    required: true,
  },
  quizID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Quiz",
  },
});

export default mongoose.model("Question", questionSchema);
