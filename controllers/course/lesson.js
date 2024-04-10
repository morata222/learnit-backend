import Course from "../../models/course/course.js";
import User from "../../models/user/user.js";
import ApiError from "../../middleware/errors/customError.js";
import CourseSection from "../../models/course/course-section.js";
import Lesson from "../../models/course/lesson.js"
import courseSection from "../../models/course/course-section.js";
export const createNewLesson = async (req, res, next) => {
   if(!req.isInstructor) return next(new ApiError("You are not authorized to create a lesson", 403));
  const sectionID = req.body.sectionID;
  const NewLesson= new Lesson({ ...req.body});
  try {
    const lesson = await NewLesson.save();
    const section = await courseSection.findByIdAndUpdate(sectionID , { $push: { lessons: lesson._id } }, { new: true})
    const populatedSection = await section.populate("lessons")
    res.status(201).json({message : "new lesson created successfully", section: populatedSection});
  } catch (error) {
    next(error);
  }
};
export const getAllLessons = async (req, res, next) => {
  try {
    const sections = await CourseSection.find().populate("courseSections");
    res.status(200).json(sections);
  } catch (error) {
    next(error);
  }
};
export const getLessonById = async (req, res, next) => {
  const { sectionId } = req.params;
  try {
    const lesson = await Lesson.findById(sectionId).populate("courseSections");
    if(!lesson) return next(new ApiError("Course not found", 404));
    res.status(200).json(lesson);
  } catch (error) {
    next(error);
  }
};
export const updateLesson = async (req, res, next) => {
  if(!req.isInstructor) return next(new ApiError("You are not authorized to update a course", 403));
  if(req.userId !== req.body.instructorID) return next(new ApiError("You are not authorized to update this course", 403));
  const { sectionId } = req.params;
  try {
    const lesson = await Course.findByIdAndUpdate(sectionId, req.body, {
      new: true,
    });
    res.status(200).json(lesson);
  }
  catch (error) {
    next(error);
  }
};
export const deleteLesson = async (req, res, next) => {
  if(!req.isInstructor) return next(new ApiError("You are not authorized to update a course", 403));
  if(req.userId !== req.body.instructorID) return next(new ApiError("You are not authorized to update this course", 403));
  const { sectionId } = req.params;
  try {
    await Lesson.findByIdAndDelete(sectionId);
    res.status(200).json({ message: "Lesson deleted successfully" });
  } catch (error) {
    next(error);
  }
};
