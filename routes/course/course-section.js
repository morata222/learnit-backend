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

router.get("/getAllSections", getCourseSections);
router.get("/:sectionId", getCourseSectionById);
router.post("/createNewSection", checkFields, VerifyToken, createNewSection);
router.put("/:sectionId", checkFields, VerifyToken, updateCourseSection);
router.delete("/:sectionId", checkFields, VerifyToken, deleteCourseSection);

export default router;
