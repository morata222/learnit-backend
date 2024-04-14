import express from "express";
import { VerifyToken } from "../../middleware/jwt/verifyToken.js";
import { checkFields } from "../../middleware/checkFields.js";
import {
  createNewLesson,
  deleteLesson,
  getAllSectionLessons,
  getLessonById,
  updateLesson,
} from "../../controllers/course/lesson.js";
const router = express.Router();

router.post("/create", checkFields, VerifyToken, createNewLesson);
router.get("/all/", getAllSectionLessons);
router.get("/:lessonID", getLessonById);
router.put("/:lessonID", checkFields, VerifyToken, updateLesson);
router.delete("/:lessonID", VerifyToken, deleteLesson);

export default router;
