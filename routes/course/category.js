import express from 'express';

const router = express.Router();

router.get('/getAllCategories', (req, res) => {});
router.get('/:categoryName', (req, res) => {});
router.post('/createNewCategory', (req, res) => {});
router.patch('/updateCategory', (req, res) => {});
router.delete('/deleteCategory', (req, res) => {});

export default router;