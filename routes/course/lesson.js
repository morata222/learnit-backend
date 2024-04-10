import express from "express";
import { VerifyToken } from "../../middleware/jwt/verifyToken.js";
import { checkFields } from "../../middleware/checkFields.js";
import {
  createNewLesson,
  deleteLesson,
  getAllLessons,
  getLessonById,
  updateLesson,
} from "../../controllers/course/lesson.js";
const router = express.Router();

router.get("/getSectionLessons", getAllLessons);
router.get("/:lessonId", getLessonById);
router.post("/createNewLesson", checkFields, VerifyToken, createNewLesson);
router.put("/updateLesson", checkFields, VerifyToken, updateLesson);
router.delete("/deleteLesson", VerifyToken, deleteLesson);

export default router;
