import express from 'express';
import { VerifyToken } from '../../middleware/jwt/verifyToken.js';
import { checkFields } from '../../middleware/checkFields.js';
import {createQuizQuestion,deleteQuestion,getAllQuizQuestions,getQuestionById,updateQuestion} from '../../controllers/course/question.js';
const router = express.Router();

router.post('/createNewQuestion', checkFields, VerifyToken, createQuizQuestion);
router.get('/getQuizQuestions/:quizID', getAllQuizQuestions );
router.get('/:questionID', getQuestionById );
router.put('/:questionID', checkFields, VerifyToken, updateQuestion);
router.delete('/:questionID', VerifyToken, deleteQuestion);

export default router;