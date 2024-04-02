import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  questions: {
    type: Array,
    required: true,
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);