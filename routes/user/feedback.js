import express from "express";
import { VerifyToken } from "../../middleware/jwt/verifyToken.js";
import { checkFields } from "../../middleware/checkFields.js";
import {
  createFeedback,
  deleteFeedback,
  getCourseFeedbacks,
  getFeedback,
  updateFeedback,
} from "../../controllers/user/feedback.js";

const router = express.Router();

router.post("/create", checkFields, VerifyToken, createFeedback);
router.get("/all", getCourseFeedbacks);
router.get("/:feedbackID", getFeedback);
router.put("/:feedbackID", checkFields, VerifyToken, updateFeedback);
router.delete("/:feedbackID", VerifyToken, deleteFeedback);

export default router;
