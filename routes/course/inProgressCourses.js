import express from 'express';

const router = express.Router();

router.get('/getCourses', (req, res) => {});
router.get('/:courseId', (req, res) => {});
router.post('/addInProgressCourse', (req, res) => {});
router.delete('/removeInProgressCourse', (req, res) => {});

export default router;