import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
  isVerified:{
    type: Boolean,
    default: false,
  },
  isInstructor: {
    type: Boolean,
    default: false,
  },
  lastAccessToken:{
    type: String,
    default: null,
  },
  progressID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserProgress",
  },
  wishlistID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Wishlist",
  },
});

export default  mongoose.model("User", userSchema);

