import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    userID:{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
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

export default mongoose.model("Post", postSchema);
