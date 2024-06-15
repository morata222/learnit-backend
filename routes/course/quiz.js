import express from 'express';

import { VerifyToken } from '../../middleware/jwt/verifyToken.js';
import { checkFields } from '../../middleware/checkFields.js';
import {createLessonQuiz,deleteQuiz,getQuizById,updateQuiz} from "../../controllers/course/quiz.js"
const router = express.Router();

router.post('/create', checkFields, createLessonQuiz);
router.get('/:quizID', getQuizById);
router.put('/:quizID', checkFields, updateQuiz);
router.delete('/:quizID', deleteQuiz);

export default router;