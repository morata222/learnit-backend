import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    photoUrl: {
      type: String,
      trim: true,
      default: "https://res.cloudinary.com/dqhdokahr/image/upload/v1708426944/no_avatar_1_tjgnin.png",
    },
    dateJoined: {
      type: Date,
      default: Date.now,
    },
    verificationCode: {
      type: Number,
      default: null,
      RegExp: /^[0-9]{6}$/,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isInstructor: {
      type: Boolean,
      default: false,
    },
    lastAccessToken: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
