import Feedback from "../../models/user/feedback.js";
import Course from "../../models/course/course.js";
import ApiError from "../../middleware/errors/customError.js";

export const createFeedback = async (req, res, next) => {
  const userID = req.userId;
  const { courseID, rating } = req.body;
  const newFeedback = new Feedback({ ...req.body, userID });
  try {
    const feedback = await newFeedback.save();
    const course = await Course.findById(courseID);
    course.totalRating = (course.totalRating || 0) + rating;
    course.numRatings = (course.numRatings || 0) + 1;
    course.averageRating = Math.round((course.totalRating / course.numRatings) * 2) / 2;
    await course.save();
    res.status(200).json(feedback);
  } catch (error) {
    next(error);
  }
};

export const getCourseFeedbacks = async (req, res, next) => {
  const { courseID } = req.body;
  try {
    const feedbacks = await Feedback.find({ courseID });
    res.status(200).json(feedbacks);
  } catch (error) {
    next(error);
  }
};

export const getFeedback = async (req, res, next) => {
  const feedbackID = req.params.feedbackID;
  try {
    const feedback = await Feedback.findById(feedbackID);
    res.status(200).json(feedback);
  } catch (error) {
    next(error);
  }
};

export const updateFeedback = async (req, res, next) => {
  const feedbackID = req.params.feedbackID;
  const { courseID, rating } = req.body;
  try {
    const feedback = await Feedback.findById(feedbackID);
    if(!feedback) return next(new ApiError(404, "Feedback not found"));
    const course = await Course.findById(courseID);
    course.totalRating = course.totalRating - feedback.rating + rating;
    course.averageRating = Math.round((course.totalRating / course.numRatings) * 2) / 2;
    feedback.rating = rating;
    await feedback.save();
    await course.save();
    res.status(200).json(feedback);
  } catch (error) {
    next(error);
  }
};

export const deleteFeedback = async (req, res, next) => {
  const feedbackID = req.params.feedbackID;
  const { courseID } = req.body;
  try {
    const feedback = await Feedback.findById(feedbackID);
    if(!feedback) return next(new ApiError(404, "Feedback not found"));
    const course = await Course.findById(courseID);
    course.totalRating = course.totalRating - feedback.rating;
    course.numRatings = course.numRatings - 1;
    course.averageRating = Math.round((course.totalRating / course.numRatings) * 2) / 2;
    await Feedback.findByIdAndDelete(feedbackID);
    await course.save();
    res.status(200).json({ message: "Feedback deleted successfully" });
  } catch (error) {
    next(error);
  }
};
