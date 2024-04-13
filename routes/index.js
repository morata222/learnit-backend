import express from "express";

import authRoute from "./user/auth.js";
import userRoute from "./user/user.js";
import categoryRoute from "./course/category.js";
import subCategoryRoute from "./course/sub-category.js";
import courseRoute from "./course/course.js";
import lessonRoute from "./course/lesson.js";
import notificationRoute from "./notification/notification.js";
import commentRoute from "./community/comment.js";
import courseSectionRoute from "./course/course-section.js";
import quizRoute from "./course/quiz.js";
import questionRoute from "./course/question.js";
import wishlistRoute from "./user/wishlist.js";
import communityRoute from "./community/community.js";
import feedbackRoute from "./user/feedback.js";
import finalProjectRoute from "./course/final-project.js";
import postRoute from "./community/post.js";
import userProgressRoute from "./user/user-progress.js";
import certificateRoute from "./course/certificate.js";
import submissionRoute from "./course/submission.js";

const router = express.Router();

router.use("/auth", authRoute);
router.use("/user", userRoute);
router.use("/category", categoryRoute);
router.use("/sub-category", subCategoryRoute);
router.use("/course", courseRoute);
router.use ("/certificate", certificateRoute);
router.use("/lesson", lessonRoute);
router.use("/notification", notificationRoute);
router.use("/comment", commentRoute);
router.use("/course-section", courseSectionRoute);
router.use("/quiz", quizRoute);
router.use("/question", questionRoute);
router.use("/wishlist", wishlistRoute);
router.use("/community", communityRoute);
router.use("/feedback", feedbackRoute);
router.use("/final-project", finalProjectRoute);
router.use("/post", postRoute);
router.use("/user-progress", userProgressRoute);
router.use("/submission", submissionRoute);

export default router;



