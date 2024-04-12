import express from 'express';

import { VerifyToken } from '../../middleware/jwt/verifyToken.js';
import { checkFields } from '../../middleware/checkFields.js';
import {createNewCertificate,deleteCertificate,getAllCertificates,getCertificateById,updateCertificate} from '../../controllers/course/certificate.js'
const router = express.Router();

router.get('/getAllCertificates',getAllCertificates );
router.post('/createNewCertificate',checkFields , VerifyToken, createNewCertificate);
router.get('/:CertificateID',getCertificateById );
router.put('/:CertificateID', checkFields , VerifyToken ,updateCertificate );
router.delete('/:CertificateID',VerifyToken,deleteCertificate );

export default router;