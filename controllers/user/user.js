import User from "../../models/user/user";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
}

export const getUser = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}