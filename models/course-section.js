import mongoose from 'mongoose';

const courseSectionSchema = new mongoose.Schema({
  sectionName: {
    type: String,
    required: true,
    trim: true,
  },
  lessons: {
    type: Array,
    required: true,
  },
});

const CourseSection = mongoose.model("CourseSection", courseSectionSchema);