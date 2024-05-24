import mongoose from "mongoose";

const pollOptionsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    
    pollID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Poll",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("PollOptions", pollOptionsSchema);
