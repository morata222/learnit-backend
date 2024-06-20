import mongoose from "mongoose";

const communitySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    photoUrl:{
      type: String,
      default: "https://res.cloudinary.com/dqhdokahr/image/upload/v1713066592/communityLearnitIcon_vqpkuk.png",
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    polls: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Poll",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Community", communitySchema);
