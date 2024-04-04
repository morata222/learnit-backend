// import packages
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

// import files
import MongoConnection from "./config/db.js";
import errorHandler from "./middleware/errors/handleError.js";
//import routes
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import categoryRoute from "./routes/category.js";
import courseRoute from "./routes/course.js";
import lessonRoute from "./routes/lesson.js";
import instructorRoute from "./routes/instructor.js";
import notificationRoute from "./routes/notification.js";
import commentRoute from "./routes/comment.js";
import courseSectionRoute from "./routes/course-section.js";
import inProgressCourseRoute from "./routes/inProgressCourses.js";
import quizRoute from "./routes/quiz.js";
import questionRoute from "./routes/question.js";
import wishlistRoute from "./routes/wishlist.js";
import communityRoute from "./routes/community.js";
import feedbackRoute from "./routes/feedback.js";
import finalProjectRoute from "./routes/final-project.js";
import postRoute from "./routes/post.js";
import userProgressRoute from "./routes/user-progress.js";



// middlewares
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
// app.use(handleError);

// routes
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/category", categoryRoute);
app.use("/course", courseRoute);
app.use("/lesson", lessonRoute);
app.use("/instructor", instructorRoute);
app.use("/notification", notificationRoute);
app.use("/comment", commentRoute);
app.use("/course-section", courseSectionRoute);
app.use("/inProgressCourses", inProgressCourseRoute);
app.use("/quiz", quizRoute);
app.use("/question", questionRoute);
app.use("/wishlist", wishlistRoute);
app.use("/community", communityRoute);
app.use("/feedback", feedbackRoute);
app.use("/final-project", finalProjectRoute);
app.use("/post", postRoute);
app.use("/user-progress", userProgressRoute);


// Using the custom error handling middleware
app.use(errorHandler);

// application start
MongoConnection()
  .then(() => {
    app.listen(8000, () => console.log("Server Running on Port 8000"));
  })
  .catch((error) => console.log(error));
