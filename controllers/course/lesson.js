import ApiError from "../../middleware/errors/customError.js";
import CourseSection from "../../models/course/course-section.js";
import Lesson from "../../models/course/lesson.js";
import courseSection from "../../models/course/course-section.js";

export const createNewLesson = async (req, res, next) => {
  if (!req.isInstructor)
    return next(new ApiError("You are not authorized to create a lesson", 403));
  const sectionID = req.body.sectionID;
  const NewLesson = new Lesson({ ...req.body });
  try {
    const lesson = await NewLesson.save();
    const section = await courseSection.findByIdAndUpdate(
      sectionID,
      { $push: { lessons: lesson._id } },
      { new: true }
    );
    res.status(201).json({ message: "new lesson created successfully" });
  } catch (error) {
    next(error);
  }
};
export const getAllSectionLessons = async (req, res, next) => {
  try {
    const { sectionID } = req.params;
    const sections = await CourseSection.findById(sectionID).populate(
      "lessons"
    );
    res.status(200).json(sections);
  } catch (error) {
    next(error);
  }
};
export const getLessonById = async (req, res, next) => {
  const { lessonID } = req.params;
  try {
    const lesson = await Lesson.findById(lessonID);
    res.status(200).json(lesson);
  } catch (error) {
    next(error);
  }
};
export const updateLesson = async (req, res, next) => {
  if (!req.isInstructor)
    return next(new ApiError("You are not authorized to update a course", 403));
  const { lessonID } = req.params;
  try {
    const lesson = await Lesson.findByIdAndUpdate(lessonID, req.body, {
      new: true,
    });
    res.status(200).json(lesson);
  } catch (error) {
    next(error);
  }
};
export const deleteLesson = async (req, res, next) => {
  if (!req.isInstructor)
    return next(new ApiError("You are not authorized to update a course", 403));
  const { lessonID } = req.params;
  try {
    await Lesson.findByIdAndDelete(lessonID);
    res.status(200).json({ message: "Lesson deleted successfully" });
  } catch (error) {
    next(error);
  }
};
