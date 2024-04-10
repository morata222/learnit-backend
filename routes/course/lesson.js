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

router.get("/getSectionLessons/:sectionID", getAllSectionLessons);
router.get("/:lessonID", getLessonById);
router.post("/createNewLesson", checkFields, VerifyToken, createNewLesson);
router.put("/:lessonID", checkFields, VerifyToken, updateLesson);
router.delete("/:lessonID", VerifyToken, deleteLesson);

export default router;
