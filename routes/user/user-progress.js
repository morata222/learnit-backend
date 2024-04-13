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

router.get("/getAllUsersProgress", getAllUserProgresss);
router.get("/:userID", getUserProgress);
router.put("/updateUserPoints/:userID",VerifyToken, updateUserPoints);
router.put("/updateUserCertificates/:userID",VerifyToken, updateUserCertificates);
router.put("/updateUserInProgressCourses/:userID",VerifyToken, updateUserInProgressCourses);

export default router;
