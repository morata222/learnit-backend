import express from "express";

import {
  createNewCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  deleteAllCourses
} from "../../controllers/course/course.js";
import { VerifyToken } from "../../middleware/jwt/verifyToken.js";
import { checkFields } from "../../middleware/checkFields.js";

const router = express.Router();

router.post("/create", checkFields, createNewCourse);
router.get("/all", getAllCourses);
router.get("/:courseId", getCourseById);
router.put("/:courseId" , checkFields  , updateCourse)
router.delete("/:courseId"   , deleteCourse)
router.delete("/all/delete"   , deleteAllCourses)


export default router;
