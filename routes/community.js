import express from 'express';

const router = express.Router();

router.get('/getAllCommunities', (req, res) => {});
router.get('/:communityId', (req, res) => {});
router.post('/createNewCommunity', (req, res) => {});
router.patch('/updateCommunity', (req, res) => {});
router.delete('/deleteCommunity', (req, res) => {});

export default router;