import ApiError from "../../middleware/errors/customError.js";
import UserProgress from "../../models/user/user-progress.js";
import Leaderboard from "../../models/user/leaderboard.js";
export const createNewUserProgress = async (req, res, next , userID) => {
  const NewUserProgress = new UserProgress({userID});
  try {
    const UserProgress = await NewUserProgress.save();
    next();
  } catch (error) {
    next(error);
  }
};

export const getAllUserProgresss = async (req, res, next) => {
  try {
    const userProgress = await UserProgress.find();
    res.status(200).json(userProgress);
  } catch (error) {
    next(error);
  }
};
export const getUserProgress = async (req, res, next) => {
  const userID = req.params.userID;
  try {
    const userProgress = await UserProgress.findOne({ userID }).populate("certificates").populate("coursesInProgress")
    res.status(200).json(userProgress);
  } catch (error) {
    next(error);
  }
};
export const updateUserPoints = async (req, res, next) => {
  const userID = req.params.userID;
  const { addedPoints } = req.body;
  try {
    const userProgress = await UserProgress.findOneAndUpdate(
      { userID },
      { $inc: { points: addedPoints } },
      { new: true }
    );
    res.status(200).json({
      message: "Points updated successfully",
      data: userProgress,
    });
  } catch (error) {
    next(error);
  }
};
export const updateUserCertificates = async (req, res, next) => {
  const userID = req.params.userID;
  const { certificateID } = req.body;
  try {
    const userProgress = await UserProgress.findOneAndUpdate(
      { userID },
      { $push: { certificates: certificateID }},
      { new: true }
    );
    res.status(200).json({
      message: "Congratulations, you have earned a certificate!",
      data: userProgress,
    });
  } catch (error) {
    next(error);
  }
};
export const updateUserInProgressCourses = async (req, res, next) => {
  const userID = req.params.userID;
  const { courseID } = req.body;
  try {
    const userProgress = await UserProgress.findOneAndUpdate(
      { userID },
      { $push: { coursesInProgress: courseID }},
      { new: true }
    );
    res.status(200).json({
      message: "Course added to your in-progress courses!",
      data: userProgress,
    });
  } catch (error) {
    next(error);
  }
};