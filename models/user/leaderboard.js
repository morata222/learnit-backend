import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   users:[
    {
       type : mongoose.Schema.Types.ObjectId,
       ref : "User",
    }
   ]
});

export default  mongoose.model("LeaderBoard", userSchema);

