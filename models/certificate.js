import mongoose from "mongoose";


// 5. **Certificates**
//     - CertificateID (Primary Key)
//     - CertificateName
//     - Description
//     - CertificatePhotoUrl


const certificateSchema = new mongoose.Schema({
  title : {
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

const Certificate = mongoose.model("Certificate", certificateSchema);