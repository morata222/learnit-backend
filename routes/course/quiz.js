import express from 'express';

import { VerifyToken } from '../../middleware/jwt/verifyToken.js';
import { checkFields } from '../../middleware/checkFields.js';
import {createLessonQuiz,deleteQuiz,getLessonQuiz,getQuizById,updateQuiz} from "../../controllers/course/quiz.js"
const router = express.Router();

router.post('/createNewQuiz', checkFields, VerifyToken, createLessonQuiz);
router.get('/getLessonQuiz/:lessonID', getLessonQuiz);
router.get('/:quizID', getQuizById);
router.put('/:quizID', checkFields, VerifyToken, updateQuiz);
router.delete('/:quizID', VerifyToken, deleteQuiz);

export default router;