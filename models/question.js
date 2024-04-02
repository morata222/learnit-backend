import mongoose from 'mongoose';

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
});


const Question = mongoose.model("Question", questionSchema);