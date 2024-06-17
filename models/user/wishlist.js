import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: "User",
      
    },
    courses: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [], // Default to an empty array
      unique: false
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Wishlist", wishlistSchema);
