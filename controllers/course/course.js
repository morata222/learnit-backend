import Course from "../../models/course/course.js";
import SubCategory from "../../models/course/sub-category.js";
import ApiError from "../../middleware/errors/customError.js";

export const createNewCourse = async (req, res, next) => {
  // if (!req.isInstructor)
  //   return next(new ApiError("You are not authorized to create a course", 403));
  const NewCourse = new Course({ ...req.body });
  const { subCategorName } = req.body;
  try {
    const course = await NewCourse.save();
    const subCategory = await SubCategory.findOneAndUpdate(
      subCategorName,
      { $push: { courses: course._id } },
      { new: true }
    );
    res.status(201).json(course);
  } catch (error) {
    next(error);
  }
};
export const getAllCourses = async (req, res, next) => {
  const { search } = req.query;
  const populateQuery = {
    path: "courseSections",
    populate: {
      path: "lessons",
      populate: {
        path: "quizID",
        model: "Quiz",
        populate: {
          path: "questions",
          model: "Question",
        },
      },
    },
  };

  try {
    let courses;
    if (search) {
      courses = await Course.find({
        courseName: { $regex: search, $options: "i" },
      }).populate(populateQuery);
    } else {
      courses = await Course.find().populate(populateQuery);
    }
    res.status(200).json(courses);
  } catch (error) {
    next(error);
  }
};
export const getCourseById = async (req, res, next) => {
  const { courseId } = req.params;
  try {
    const course = await Course.findById(courseId).populate({
      path: "courseSections",
      populate: {
        path: "lessons",
        populate: {
          path: "quizID",
          model: "Quiz",
          populate: {
            path: "questions",
            model: "Question",
          },
        },
      },
    });
    if (!course) return next(new ApiError("Course not found", 404));
    res.status(200).json(course);
  } catch (error) {
    next(error);
  }
};
export const updateCourse = async (req, res, next) => {
  // if (!req.isInstructor)
  //   return next(new ApiError("You are not authorized to update a course", 403));
  // if (req.userId !== req.body.instructorID)
  //   return next(
  //     new ApiError("You are not authorized to update this course", 403)
  //   );
  const { courseId } = req.params;
  try {
    const course = await Course.findByIdAndUpdate(courseId, req.body, {
      new: true,
    });
    res.status(200).json(course);
  } catch (error) {
    next(error);
  }
};
export const deleteCourse = async (req, res, next) => {
  // if (!req.isInstructor)
  //   return next(new ApiError("You are not authorized to update a course", 403));
  // if (req.userId !== req.body.instructorID)
  //   return next(
  //     new ApiError("You are not authorized to update this course", 403)
  //   );
  const { courseId } = req.params;
  try {
    await Course.findByIdAndDelete(courseId);
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (error) {
    next(error);
  }
};
export const deleteAllCourses = async (req, res, next) => {
  try {
    await Course.deleteMany({});
    res.status(200).json({ message: "Courses deleted successfully" });
  } catch (error) {
    next(error);
  }
};
