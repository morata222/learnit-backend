import express from "express";
import { VerifyToken } from "../../middleware/jwt/verifyToken.js";
import {
  getAllUserProgresss,
  getUserProgress,
  updateUserCertificates,
  updateUserInProgressCourses,
  updateUserPoints,
} from "../../controllers/user/user-progress.js";

const router = express.Router();

router.get("/all", getAllUserProgresss);
router.get("/:userID", getUserProgress);
router.put("/updateUserPoints",VerifyToken, updateUserPoints);
router.put("/updateUserCertificates",VerifyToken, updateUserCertificates);
router.put("/updateUserInProgressCourses",VerifyToken, updateUserInProgressCourses);

export default router;
