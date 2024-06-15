import express from "express";

import { VerifyToken } from "../../middleware/jwt/verifyToken.js";
import { checkFields } from "../../middleware/checkFields.js";
import {
  getCourseSections,
  createNewSection,
  deleteCourseSection,
  getCourseSectionById,
  updateCourseSection,
} from "../../controllers/course/course-section.js";

const router = express.Router();

router.get("/all/:courseID", getCourseSections);
router.post("/create", checkFields, createNewSection);
router.get("/:sectionId", getCourseSectionById);
router.put("/:sectionId", checkFields, updateCourseSection);
router.delete("/:sectionId", checkFields, deleteCourseSection);

export default router;
