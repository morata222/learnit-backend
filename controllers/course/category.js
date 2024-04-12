import Category from "../../models/course/category.js";
import ApiError from "../../middleware/errors/customError.js";


export const createNewCategory = async (req, res, next) => {
  const NewCategory = new Category({ ...req.body});
  try {
    const category = await NewCategory.save();
    res.status(201).json({message : "new category created successfully"});
  } catch (error) {
    next(error);
  }
};

export const getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.find()
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};
export const getCategoryById = async (req, res, next) => {
  const { CategoryID } = req.params;
  try {
    const category = await Category.findById(CategoryID).populate("subCategories");
    res.status(200).json(category);
  } catch (error) {
    next(error);
  }
};
export const updateCategory = async (req, res, next) => {
  const { CategoryID } = req.params;
  try {
    const category = await Category.findByIdAndUpdate(CategoryID, req.body, {
      new: true,
    });
    res.status(200).json(category);
  }
  catch (error) {
    next(error);
  }
};
export const deleteCategory = async (req, res, next) => {
  const { CategoryID } = req.params;
  try {
    await Category.findByIdAndDelete(CategoryID);
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    next(error);
  }
};
