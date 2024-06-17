import User from "../../models/user/user.js";
import InProgressCourse from "../../models/user/inporgress-courses.js";

export const createInProgressCourse = async (userID) => {
  const newInProgressCourse = new InProgressCourse({ userID });
  try {
    const inProgressCourse = await newInProgressCourse.save();
    return inProgressCourse;
  } catch (error) {
    throw(error);
  }
};

export const getInProgressCourse = async (req, res, next) => {
  const { userID } = req.params;
  try {
    const inProgressCourse = await InProgressCourse.findOne({ userID });
    res.status(200).json(inProgressCourse);
  } catch (error) {
    next(error);
  }
};

export const addCourseToInProgressCourse = async (req, res, next) => {
  const {userID , courseID} = req.body;
  try {
    const inProgressCourse = await InProgressCourse.findOneAndUpdate(
      { userID },
      { $addToSet: { courses: courseID } }, // Use $addToSet instead of $push
      { new: true }
    );
    res.status(200).json(inProgressCourse);
  } catch (error) {
    next(error);
  }
};

export const removeCourseFromInProgressCourse = async (req, res, next) => {
  const {userID , courseID} = req.body;
  try {
    const inProgressCourse = await InProgressCourse.findOneAndUpdate(
      { userID },
      { $pull: { courses: courseID } },
      { new: true }
    );
    res.status(200).json(inProgressCourse);
  } catch (error) {
    next(error);
  }
};


 