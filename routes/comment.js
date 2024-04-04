import express from 'express';

const router = express.Router();

router.get('/getPostComments', (req, res) => {});
router.get('/commentId', (req, res) => {});
router.post('/createNewComment', (req, res) => {});
router.patch('/updateComment', (req, res) => {});
router.delete('/deleteComment', (req, res) => {});

export default router;