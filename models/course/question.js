import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true,
  },
  answers: {
    type: Array,
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quiz",
  },
});

export default mongoose.model("Question", questionSchema);
