import ApiError from "../../middleware/errors/customError.js";
import UserProgress from "../../models/user/user-progress.js";
import Quiz from '../../models/course/quiz.js';
export const createNewUserProgress = async (userID) => {
  const NewUserProgress = new UserProgress({userID});
  try {
    const UserProgress = await NewUserProgress.save();
    return UserProgress;
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
    const userProgress = await UserProgress.findOne({userID}).populate('certificates').populate('coursesInProgress').populate('savedCourses');
    res.status(200).json(userProgress);
  } catch (error) {
    next(error);
  }
};
export const getUserPoints = async (req, res, next) => {
  const userID = req.params.userID;
  try {
    const userProgress = await UserProgress.findOne({userID});
    res.status(200).json(userProgress);
  } catch (error) {
    next(error);
  }
};
export const updateUserPoints = async (req, res, next) => {
  const { addedPoints , userID , quizID } = req.body;
  try {
    const userProgress = await UserProgress.findOneAndUpdate(
      { userID },
      { $inc: { points: addedPoints } },
      { new: true }
    );
    // push userID to solvedBy array in quiz
    const quiz = await Quiz.findByIdAndUpdate(quizID, { $push: { solvedBy: userID } });
    res.status(200).json({
      message: "Points updated successfully",
      data: userProgress,
    });
  } catch (error) {
    next(error);
  }
};
export const updateUserCertificates = async (req, res, next) => {
  const { certificateID , userID } = req.body;
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
  const { courseID , userID } = req.body;
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
export const updateUserWishlistCourses = async (req, res, next) => {
  const { courseID , userID } = req.body;
  try {
    const userProgress = await UserProgress.findOneAndUpdate(
      { userID },
      { $push: { savedCourses: courseID }},
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
