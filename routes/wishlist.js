import express from 'express';

const router = express.Router();

router.get('/getWishlistCourses', (req, res) => {});
router.get('/:userId', (req, res) => {});
router.post('/addNewCourseToWishlist', (req, res) => {});
router.patch('/updateWishlist', (req, res) => {});
router.delete('/deleteCourseFromWishlist', (req, res) => {});

export default router;