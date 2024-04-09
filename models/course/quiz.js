import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  lessonID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Lesson",
  },
  questions: {
    type: Array,
    required: true,
  },
});

export default mongoose.model("Quiz", quizSchema);