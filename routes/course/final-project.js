import express from 'express';

import { VerifyToken } from '../../middleware/jwt/verifyToken.js';
import { checkFields } from '../../middleware/checkFields.js';
import {createNewFinalProject,deleteFinalProject,getAllFinalProjects,getFinalProjectById,updateFinalProject} from '../../controllers/course/final-project.js'

const router = express.Router();

router.get('/getCourseFinalProject', getAllFinalProjects );
router.post('/createNewFinalProject',  checkFields, VerifyToken, createNewFinalProject);
router.get('/:FinalProjectID', getFinalProjectById );
router.put('/:FinalProjectID', checkFields, VerifyToken, updateFinalProject);
router.delete('/:FinalProjectID', VerifyToken, deleteFinalProject);

export default router;