import mongoose from 'mongoose';

const courseSectionSchema = new mongoose.Schema({
  sectionName: {
    type: String,
    required: true,
    trim: true,
  },
  lessons:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lesson",
    },
  ]
});

const CourseSection = mongoose.model("CourseSection", courseSectionSchema);