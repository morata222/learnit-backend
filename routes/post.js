import express from 'express';

const router = express.Router();

router.get('/getCommunityPosts', (req, res) => {});
router.get('/:postId', (req, res) => {});
router.post('/createNewPost', (req, res) => {});
router.patch('/updatePost', (req, res) => {});
router.delete('/deletePost', (req, res) => {});

export default router;