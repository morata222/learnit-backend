import mongoose from "mongoose";

const userProgressSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    points: {
      type: Number,
      default: 0,
    },
    rank: {
      type: String,
      default: "Beginner",
    },
    certificates: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Certificate",
      },
    ],
    coursesInProgress: [
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

export default mongoose.model("UserProgress", userProgressSchema);
