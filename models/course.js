import mongoose from 'mongoose'

// 2. **Courses**
//     - CourseID (Primary Key)
//     - UserId (forign key)
//     - CourseName
//     - Description
//     - InstructorID (Foreign Key)
//     - CategoryID (Foreign Key)
//     - CertificateID (Foreign Key)
//     - Rating
//     - RecommendationID (Foreign Key)
//     - CourseContent

const courseSchema = new mongoose.Schema({

  courseName: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  instructorID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Instructor",
  },
  categoryID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  certificateID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Certificate",
  },
  rating: {
    type: Number,
    required: true,
  },
  recommendationID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recommendation",
  },
  courseSections: {
    type: Array,
    required: true,
  },
});

const Course = mongoose.model("Course", courseSchema);