import User from "../../models/user/user.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
}

export const getUser = async (req, res, next) => {
  const {userID} = req.params;
  try {
    const user = await User.findById(userID);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}
export const updateUserInfo = async (req, res, next) => {
  const {userID} = req.params;
  try {
    const user = await User.findByIdAndUpdate(userID, req.body, { new: true });
    res.status(200).json(user);
  }
  catch (error) {
    next(error);
  }
}