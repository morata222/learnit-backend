import express from 'express';
import { VerifyToken } from '../../middleware/jwt/verifyToken.js';
import { checkFields } from '../../middleware/checkFields.js';
import {createNewCategory,getAllCategories,deleteCategory,getCategoryById,updateCategory} from '../../controllers/course/category.js';
const router = express.Router();

router.get('/all',getAllCategories );
router.post('/create', createNewCategory );
router.get('/:CategoryID', getCategoryById );
router.put('/:CategoryID', checkFields, VerifyToken,  updateCategory);
router.delete('/:CategoryID',VerifyToken, deleteCategory );

export default router;