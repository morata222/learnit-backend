import express from 'express';

const router = express.Router();

router.get('/getAllNotifications', (req, res) => {});
router.get('/:notificationId', (req, res) => {});
router.post('/createNewNotification', (req, res) => {});
router.patch('/updateNotification', (req, res) => {});
router.delete('/deleteNotification', (req, res) => {});

export default router;