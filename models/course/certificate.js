import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  dateCompleted: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Certificate", certificateSchema);
