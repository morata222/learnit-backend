import express from 'express';

const router = express.Router();

router.get('/getAllSections', (req, res) => {});
router.get('/:sectionId', (req, res) => {});
router.post('/createNewSection', (req, res) => {});
router.patch('/updateSection', (req, res) => {});
router.delete('/deleteSection', (req, res) => {});

export default router;