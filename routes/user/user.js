import express from 'express';

const router = express.Router();

router.get('/getAllUsers', (req, res) => {});
router.get('/:userId', (req, res) => {});
router.post('/addNewUser', (req, res) => {});
router.patch('/updateUser/:id', (req, res) => {});
router.delete('/deleteUser', (req, res) => {});

export default router;