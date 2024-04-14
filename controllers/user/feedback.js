import Feedback from "../../models/user/feedback.js";

export const createFeedback = async (req, res, next) => {
  const userID = req.userId;
  const newFeedback = new Feedback({ ...req.body, userID });
  try {
    const feedback = await newFeedback.save();
    res.status(200).json(feedback);
  } catch (error) {
    next(error);
  }
};

export const getCourseFeedbacks = async (req, res, next) => {
  const { courseID } = req.body;
  try {
    const feedbacks = await Feedback.find({ courseID })
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
  try {
    const feedback = await Feedback.findByIdAndUpdate (feedbackID, req.body, { new: true });
    res.status(200).json(feedback);
  }
  catch (error) {
    next(error);
  }
}

export const deleteFeedback = async (req, res, next) => {
  const feedbackID = req.params.feedbackID;
  try {
    const feedback = await Feedback.findByIdAndDelete(feedbackID);
    res.status(200).json({ message: "Feedback deleted successfully" });
  }
  catch (error) {
    next(error);
  }
}
