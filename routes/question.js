import express from 'express';

const router = express.Router();

router.get('/getLessonQuestions', (req, res) => {});
router.get('/:questionId', (req, res) => {});
router.post('/createNewQuestion', (req, res) => {});
router.patch('/updateQuestion', (req, res) => {});
router.delete('/deleteQuestion', (req, res) => {});

export default router;