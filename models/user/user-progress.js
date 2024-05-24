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
      default: "Newbie",
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
    allTimeRanking: {
      type: Number,
      default: 0,
    },
    monthlyRanking: {
      type: Number,
      default: 0,
    },
    lastRankingUpdate: {
      type: Date,
      default: Date.now,
    },
  },

  {
    timestamps: true,
  }
);

// Function to reset monthlyRanking for all users at the beginning of each month
userProgressSchema.statics.resetMonthlyRankings = async function () {
  // Calculate the start of the current month
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  // Update all users' monthlyRanking to 0
  await this.updateMany(
    { lastRankingUpdate: { $lt: startOfMonth } },
    { $set: { monthlyRanking: 0, lastRankingUpdate: now } }
  );
};

export default mongoose.model("UserProgress", userProgressSchema);
