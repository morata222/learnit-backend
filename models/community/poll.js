import mongoose from "mongoose";

const PollSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    options: [
      {
        type: String,
        required: true,
        trim: true,
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
