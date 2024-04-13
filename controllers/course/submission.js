import ApiError from "../../middleware/errors/customError.js";
import Submission from "../../models/course/submission.js";

export const createNewSubmission = async (req, res, next) => {
  const userID  = req.userId;
  const NewSubmission = new Submission({ ...req.body, userID});
  try {
    const Submission = await NewSubmission.save();
    res.status(201).json({message : "new Submission created successfully"});
  } catch (error) {
    next(error);
  }
};

export const getAllSubmissions = async (req, res, next) => {
  try {
    const Submissions = await Submission.find()
    res.status(200).json(Submissions);
  } catch (error) {
    next(error);
  }
};
export const getSubmissionById = async (req, res, next) => {
  const { SubmissionID } = req.params;
  try {
    const submission = await Submission.findById(SubmissionID);
    res.status(200).json(submission);
  } catch (error) {
    next(error);
  }
};
export const updateSubmission = async (req, res, next) => {
  const { SubmissionID } = req.params;
  try {
    const submission = await Submission.findByIdAndUpdate(SubmissionID, req.body, {
      new: true,
    });
    res.status(200).json(submission);
  }
  catch (error) {
    next(error);
  }
};
export const deleteSubmission = async (req, res, next) => {
  const { SubmissionID } = req.params;
  try {
    await Submission.findByIdAndDelete(SubmissionID);
    res.status(200).json({ message: "Submission deleted successfully" });
  } catch (error) {
    next(error);
  }
};
