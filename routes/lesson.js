import express from 'express';

const router = express.Router();

router.get('/getCourseLessons', (req, res) => {});
router.get('/:lessonId', (req, res) => {});
router.post('/createNewLesson', (req, res) => {});
router.patch('/updateLesson', (req, res) => {});
router.delete('/deleteLesson', (req, res) => {});

export default router;