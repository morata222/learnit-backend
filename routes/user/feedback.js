import express from 'express';

const router = express.Router();

router.get('/getCourseFeedbacks', (req, res) => {});
router.get('/:feedbackId', (req, res) => {});
router.post('/createNewFeedback', (req, res) => {});
router.patch('/updateFeedback', (req, res) => {});
router.delete('/deleteFeedback', (req, res) => {});

export default router;