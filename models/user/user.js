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

