import User from "../../models/user/user.js";
import InProgressCourse from "../../models/user/inporgress-courses.js";

export const createInProgressCourse = async (userID) => {
  try {
    const existingInProgressCourse = await InProgressCourse.findOne({ userID });
    if (!existingInProgressCourse) {
      const InProgressCourse = new InProgressCourse({
        userID,
        courses: []
      });
      await InProgressCourse.save();
    } else {
      console.log(`InProgressCourse already exists for user: ${userID}`);
    }
  } catch (error) {
    console.error(`Error creating InProgressCourse for user ${userID} with data:`, error);
  }
};
export const createInProgressCourseForEachUser = async () => {
  try {
    const users = await User.find();
    for (const user of users) {
      const existingInProgressCourse = await InProgressCourse.findOne({ userId: user._id });
      if (!existingInProgressCourse) {
        await createInProgressCourse(user._id);
      }
    }
  } catch (error) {
    console.error('Error creating InProgressCourses:', error);
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


 