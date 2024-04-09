import express from "express";

import {
  createNewCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} from "../../controllers/course/course.js";
import { VerifyToken } from "../../middleware/jwt/verifyToken.js";
import { checkFields } from "../../middleware/checkFields.js";

const router = express.Router();

router.post("/createNewCourse", checkFields, VerifyToken, createNewCourse);
router.get("/getAllCourses", getAllCourses);
router.get("/:courseId", getCourseById);
router.put("/:courseId" , checkFields , VerifyToken , updateCourse)
router.delete("/:courseId" , checkFields , VerifyToken , deleteCourse)


export default router;
