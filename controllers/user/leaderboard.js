import UserProgress from "../../models/user/user-progress.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserProgress.find()
      .populate("userID", "username email photoUrl")
      .sort({ points: -1 }); // Sort users by points in descending order
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getMonthlyRanking = async (req, res, next) => {
  try {
    const users = await UserProgress.find()
      .populate("userID", "username email photoUrl")
      .sort({ points: -1 }); // Sort users by points in descending order
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
