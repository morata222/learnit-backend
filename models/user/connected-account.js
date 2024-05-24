import mongoose from "mongoose";

const ConnectAccountsSchema = new mongoose.Schema(
   {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },

   }
)

export default mongoose.model("ConnectedAccount", ConnectAccountsSchema);