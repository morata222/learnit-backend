import User from "../../models/user/user.js";
import Wishlist from "../../models/user/wishlist.js";

export const createWishlist = async (userID) => {
  const newWishlist = new Wishlist({ userID });
  try {
    const wishlist = await newWishlist.save();
    return wishlist;
  } catch (error) {
    throw(error);
  }
};

export const getWishlist = async (req, res, next) => {
  const { userID } = req.params;
  try {
    const wishlist = await Wishlist.findOne({ userID });
    res.status(200).json(wishlist);
  } catch (error) {
    next(error);
  }
};

export const addCourseToWishlist = async (req, res, next) => {
  const {userID , courseID} = req.body;
  try {
    const wishlist = await Wishlist.findOneAndUpdate(
      { userID },
      { $addToSet: { courses: courseID } }, // Use $addToSet instead of $push
      { new: true }
    );
    res.status(200).json(wishlist);
  } catch (error) {
    next(error);
  }
};

export const removeCourseFromWishlist = async (req, res, next) => {
  const {userID , courseID} = req.body;
  try {
    const wishlist = await Wishlist.findOneAndUpdate(
      { userID },
      { $pull: { courses: courseID } },
      { new: true }
    );
    res.status(200).json(wishlist);
  } catch (error) {
    next(error);
  }
};
