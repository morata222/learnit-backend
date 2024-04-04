import express from 'express';

const router = express.Router();

router.get('/getAllCourses', (req, res) => {});
router.get('/:courseId', (req, res) => {});
router.post('/createNewCourse', (req, res) => {});
router.patch('/updateCourse', (req, res) => {});
router.delete('/deleteCourse', (req, res) => {});

export default router;