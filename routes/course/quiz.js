import express from 'express';

const router = express.Router();

router.get('/getCourseQuizzes', (req, res) => {});
router.get('/:quizId', (req, res) => {});
router.post('/createNewQuiz', (req, res) => {});
router.patch('/updateQuiz', (req, res) => {});
router.delete('/deleteQuiz', (req, res) => {});

export default router;