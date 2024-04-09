import mongoose from 'mongoose';

const courseSectionSchema = new mongoose.Schema({
  sectionName: {
    type: String,
    required: true,
    trim: true,
  },
  courseID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
  totalTime: {
    type: Number,
    required: true,
  },
  lessons:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lesson",
    },
  ]
});

export default mongoose.model("CourseSection", courseSectionSchema);