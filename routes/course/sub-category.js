import express from 'express';
import { VerifyToken } from '../../middleware/jwt/verifyToken.js';
import { checkFields } from '../../middleware/checkFields.js';
import {createNewSubCategory, deleteSubCategory,getAllSubCategories, getSubCategoryById,updateSubCategory} from '../../controllers/course/sub-category.js';
const router = express.Router();

router.get('/all',getAllSubCategories );
router.post('/create', createNewSubCategory );
router.get('/:subCategoryID', getSubCategoryById );
router.put('/:subCategoryID', checkFields, VerifyToken,  updateSubCategory);
router.delete('/:subCategoryID',VerifyToken, deleteSubCategory );

export default router;