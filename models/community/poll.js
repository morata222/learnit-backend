import mongoose from "mongoose";

const PollSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    totalVotes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    options: [
      {
        title: {
          type: String,
          required: true,
          trim: true,
        },
        count: {
          type: Number,
          default: 0,
        },
      },
    ],
    communityID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Community",
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Poll", PollSchema);
