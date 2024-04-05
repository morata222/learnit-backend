import express from 'express';

const router = express.Router();

router.get('/getAllInstructor', (req, res) => {});
router.get('/:instructorId', (req, res) => {});
router.post('/addNewInstructor', (req, res) => {});
router.patch('/updateInstructorData', (req, res) => {});
router.delete('/deleteInstructor', (req, res) => {});

export default router;