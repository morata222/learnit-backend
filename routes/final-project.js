import express from 'express';

const router = express.Router();

router.get('/getCourseFinalProject', (req, res) => {});
router.get('/:courseId', (req, res) => {});
router.post('/createNewFinalProject', (req, res) => {});
router.patch('/updateFinalProject', (req, res) => {});
router.delete('/deleteFinalProject', (req, res) => {});

export default router;