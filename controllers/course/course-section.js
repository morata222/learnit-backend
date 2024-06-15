import CourseSection from "../../models/course/course-section.js";
import ApiError from "../../middleware/errors/customError.js";
import Course from '../../models/course/course.js'

export const createNewSection = async (req, res, next) => {
  const NewCourseSection = new CourseSection({...req.body});
  try {
    const section = await NewCourseSection.save();
    await Course.findByIdAndUpdate(
      req.body.courseID,
      { $push: { courseSections: section._id } },
      { new: true}
    )
    res.status(201).json({message : "new section created successfully"});
  } catch (error) {
    next(error);
  }
};
export const getCourseSections = async (req, res, next) => {
  try {
    const { courseID } = req.params;  
    const course = await Course.findById(courseID);
    if (!course) {
      return next(new ApiError("No such course", 404));
    }
    await course.populate("courseSections")
    res.status(200).json(course.courseSections);
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
  const { sectionId } = req.params;
  try {
    await CourseSection.findByIdAndDelete(sectionId);
    res.status(200).json({ message: "Section deleted successfully" });
  } catch (error) {
    next(error);
  }
};
