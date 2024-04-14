import Quiz from "../../models/course/quiz.js";
import Question from "../../models/course/question.js";
import ApiError from "../../middleware/errors/customError.js";

export const createQuizQuestion = async (req, res, next) => {
   if(!req.isInstructor) return next(new ApiError("You are not authorized to create a lesson", 403));
  const quizID = req.body.quizID;
  const NewQuestion = new Question({ ...req.body});
  try {
    const question = await NewQuestion.save();
    const quiz = await Quiz.findByIdAndUpdate(quizID , { $push: { questions: question._id } }, { new: true})
    res.status(201).json({message : "new question created successfully"});
  } catch (error) {
    next(error);
  }
};
export const getAllQuizQuestions = async (req, res, next) => {
  try {
    const { quizID } = req.body;
    const questions = await Quiz.findById(quizID).populate("questions");
    res.status(200).json(questions);
  } catch (error) {
    next(error);
  }
};
export const getQuestionById = async (req, res, next) => {
  const { questionID } = req.params;
  try {
    const question = await Question.findById(questionID);
    res.status(200).json(question);
  } catch (error) {
    next(error);
  }
};
export const updateQuestion = async (req, res, next) => {
  if(!req.isInstructor) return next(new ApiError("You are not authorized to update a course", 403));
  const { questionID } = req.params;
  try {
    const question = await Question.findByIdAndUpdate(questionID, req.body, {
      new: true,
    });
    res.status(200).json(question);
  }
  catch (error) {
    next(error);
  }
};
export const deleteQuestion = async (req, res, next) => {
  if(!req.isInstructor) return next(new ApiError("You are not authorized to update a course", 403));
  const { questionID } = req.params;
  try {
    await Question.findByIdAndDelete(questionID);
    res.status(200).json({ message: "question deleted successfully" });
  } catch (error) {
    next(error);
  }
};
