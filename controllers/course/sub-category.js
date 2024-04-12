import SubCategory from "../../models/course/sub-category.js";
import Category from "../../models/course/category.js";
import ApiError from "../../middleware/errors/customError.js";


export const createNewSubCategory = async (req, res, next) => {
  const NewSubCategory = new SubCategory({ ...req.body});
  try {
    const SubCategory = await NewSubCategory.save();
    const category = await Category.findByIdAndUpdate(req.body.CategoryID, { $push: { subCategories: SubCategory._id } }, { new: true });
    res.status(201).json({message : "new SubCategory created successfully"});
  } catch (error) {
    next(error);
  }
};

export const getAllSubCategories = async (req, res, next) => {
  try {
    const SubCategories = await SubCategory.find()
    res.status(200).json(SubCategories);
  } catch (error) {
    next(error);
  }
};
export const getSubCategoryById = async (req, res, next) => {
  const { subCategoryID } = req.params;
  try {
    const subCategory = await SubCategory.findById(subCategoryID).populate("courses");
    res.status(200).json(subCategory);
  } catch (error) {
    next(error);
  }
};
export const updateSubCategory = async (req, res, next) => {
  const { subCategoryID } = req.params;
  try {
    const subCategory = await SubCategory.findByIdAndUpdate(subCategoryID, req.body, {
      new: true,
    });
    res.status(200).json(subCategory);
  }
  catch (error) {
    next(error);
  }
};
export const deleteSubCategory = async (req, res, next) => {
  const { subCategoryID } = req.params;
  try {
    await SubCategory.findByIdAndDelete(subCategoryID);
    res.status(200).json({ message: "SubCategory deleted successfully" });
  } catch (error) {
    next(error);
  }
};
