import express from "express";
import { VerifyToken } from "../../middleware/jwt/verifyToken.js";
import {
  getAllUserProgresss,
  getUserProgress,
  getUserPoints,
  updateUserCertificates,
  updateUserInProgressCourses,
  updateUserPoints,

} from "../../controllers/user/user-progress.js";

const router = express.Router();

router.get("/all", getAllUserProgresss);
router.get("/:userID", getUserProgress);
router.get("/points/:userID", getUserPoints);
router.put("/updateUserPoints", updateUserPoints);
router.put("/updateUserCertificates", updateUserCertificates);
router.put("/updateUserInProgressCourses", updateUserInProgressCourses);

export default router;
