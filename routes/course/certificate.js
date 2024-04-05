import express from 'express';

const router = express.Router();

router.get('/getUserCertificates', (req, res) => {});
router.get('/:certificateId', (req, res) => {});
router.post('/createNewCertificate', (req, res) => {});
router.patch('/updateCertificate', (req, res) => {});
router.delete('/deleteCertificate', (req, res) => {});

export default router;