import User from "../../models/user/user.js";
import Wishlist from "../../models/user/wishlist.js";

export const createWishlist = async (userID) => {
  try {
    const existingWishlist = await Wishlist.findOne({ userID });
    if (!existingWishlist) {
      const wishlist = new Wishlist({
        userID,
        courses: [] // Ensure courses is initialized as an empty array
      });
      await wishlist.save();
    } else {
      console.log(`Wishlist already exists for user: ${userID}`);
    }
  } catch (error) {
    console.error(`Error creating wishlist for user ${userID} with data:`, error);
  }
};
export const createWishlistForEachUser = async () => {
  try {
    const users = await User.find();
    for (const user of users) {
      const existingWishlist = await Wishlist.findOne({ userId: user._id });
      if (!existingWishlist) {
        await createWishlist(user._id);
      }
    }
  } catch (error) {
    console.error('Error creating wishlists:', error);
  }
};

export const getAllUserWishlist = async (req, res, next) => {
  try {
    const wishlist = await Wishlist.find();
    res.status(200).json(wishlist);
  } catch (error) {
    next(error);
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
