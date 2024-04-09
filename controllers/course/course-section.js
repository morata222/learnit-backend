import CourseSection from "../../models/course/course-section.js";
import ApiError from "../../middleware/errors/customError.js";

export const createNewSection = async (req, res, next) => {
   if(!req.isInstructor) return next(new ApiError("You are not authorized to create a course section", 403));
  const NewCourseSection = new CourseSection({ ...req.body  , instructorID: req.userId });
  try {
    const section = await NewCourseSection.save();
    res.status(201).json(section);
  } catch (error) {
    next(error);
  }
};
export const getCourseSections = async (req, res, next) => {
  try {
    const sections = await CourseSection.find();
    res.status(200).json(sections);
  } catch (error) {
    next(error);
  }
};
export const getCourseSectionById = async (req, res, next) => {
  const { sectionId } = req.params;
  try {
    const section = await CourseSection.findById(sectionId);
    res.status(200).json(section);
  } catch (error) {
    next(error);
  }
};
export const updateCourseSection = async (req, res, next) => {
  if(!req.isInstructor) return next(new ApiError("You are not authorized to update a course", 403));
  const { sectionId } = req.params;
  try {
    const section = await CourseSection.findByIdAndUpdate(sectionId, req.body, {
      new: true,
    });
    res.status(200).json(section);
  }
  catch (error) {
    next(error);
  }
};
export const deleteCourseSection = async (req, res, next) => {
  if(!req.isInstructor) return next(new ApiError("You are not authorized to update a course", 403));
  const { sectionId } = req.params;
  try {
    await CourseSection.findByIdAndDelete(sectionId);
    res.status(200).json({ message: "Section deleted successfully" });
  } catch (error) {
    next(error);
  }
};
