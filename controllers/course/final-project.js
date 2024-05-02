import ApiError from "../../middleware/errors/customError.js";
import FinalProject from "../../models/course/final-project.js";

export const createNewFinalProject = async (req, res, next) => {
  const NewFinalProject = new FinalProject({ ...req.body});
  try {
    const FinalProject = await NewFinalProject.save();
    res.status(201).json({message : "new FinalProject created successfully"});
  } catch (error) {
    next(error);
  }
};

export const getAllFinalProjects = async (req, res, next) => {
  try {
    const FinalProjects = await FinalProject.find()
    res.status(200).json(FinalProjects);
  } catch (error) {
    next(error);
  }
};
export const getFinalProjectById = async (req, res, next) => {
  const { FinalProjectID } = req.params;
  try {
    const finalProject = await FinalProject.findById(FinalProjectID);
    res.status(200).json(finalProject);
  } catch (error) {
    next(error);
  }
};
export const updateFinalProject = async (req, res, next) => {
  const { FinalProjectID } = req.params;
  try {
    const finalProject = await FinalProject.findByIdAndUpdate(FinalProjectID, req.body, {
      new: true,
    });
    res.status(200).json(finalProject);
  }
  catch (error) {
    next(error);
  }
};
export const deleteFinalProject = async (req, res, next) => {
  const { FinalProjectID } = req.params;
  try {
    await FinalProject.findByIdAndDelete(FinalProjectID);
    res.status(200).json({ message: "FinalProject deleted successfully" });
  } catch (error) {
    next(error);
  }
};
