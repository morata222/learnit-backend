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
        ref: "Course",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("InProgressCourses", wishlistSchema);
