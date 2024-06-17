import UserProgress from "../../models/user/user-progress.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await UserProgress.find().populate("userID", "username email photoUrl");
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
}
export const getMonthlyRanking = async (req, res, next) => {
  try {
    const users = await UserProgress.find().populate("userID", "username email photoUrl");
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
}

