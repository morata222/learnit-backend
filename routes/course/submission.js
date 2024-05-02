import express from "express";
import { VerifyToken } from "../../middleware/jwt/verifyToken.js";
import { checkFields } from "../../middleware/checkFields.js";
import {
  createNewSubmission,
  deleteSubmission,
  getAllSubmissions,
  getSubmissionById,
  updateSubmission,
} from "../../controllers/course/submission.js";

const router = express.Router();

router.get("/all", getAllSubmissions);
router.post("/create", createNewSubmission);
router.get("/:SubmissionID", getSubmissionById);
router.put("/:SubmissionID", checkFields, VerifyToken, updateSubmission);
router.delete("/:SubmissionID", VerifyToken, deleteSubmission);

export default router;
