import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        // how to make sure that the course is unique in the wishlist
        
        ref: "Course",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Wishlist", wishlistSchema);
