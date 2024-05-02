import Lesson from "../../models/course/lesson.js"
import Quiz from "../../models/course/quiz.js";
import ApiError from "../../middleware/errors/customError.js";


export const createLessonQuiz = async (req, res, next) => {
   if(!req.isInstructor) return next(new ApiError("You are not authorized to create a lesson", 403));
  const lessonID = req.body.lessonID;
  const NewQuiz = new Quiz({ ...req.body});
  try {
    const quiz = await NewQuiz.save();
    const lesson = await Lesson.findByIdAndUpdate(lessonID , { $set: { quizID: quiz._id } }, { new: true})
    res.status(201).json({message : "new quiz created successfully"});
  } catch (error) {
    next(error);
  }
};

export const getQuizById = async (req, res, next) => {
  const { quizID } = req.params;
  try {
    const quiz = await Quiz.findById(quizID).populate("questions");
    res.status(200).json(quiz);
  } catch (error) {
    next(error);
  }
};
export const updateQuiz = async (req, res, next) => {
  if(!req.isInstructor) return next(new ApiError("You are not authorized to update a course", 403));
  const { quizID } = req.params;
  try {
    const quiz = await Quiz.findByIdAndUpdate(quizID, req.body, {
      new: true,
    });
    res.status(200).json(quiz);
  }
  catch (error) {
    next(error);
  }
};
export const deleteQuiz = async (req, res, next) => {
  if(!req.isInstructor) return next(new ApiError("You are not authorized to update a course", 403));
  const { quizID } = req.params;
  try {
    await Quiz.findByIdAndDelete(quizID);
    res.status(200).json({ message: "quiz deleted successfully" });
  } catch (error) {
    next(error);
  }
};
