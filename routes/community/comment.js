import express from 'express';

import { VerifyToken } from '../../middleware/jwt/verifyToken.js';
import { checkFields } from '../../middleware/checkFields.js';
import {createComment,deleteComment,getComment,getComments,updateComment} from '../../controllers/community/comment.js';

const router = express.Router();

router.post('/create', VerifyToken, checkFields, createComment);
router.get('/all', VerifyToken, getComments);
router.get('/:commentID', VerifyToken, getComment);
router.put('/:commentID', VerifyToken, checkFields, updateComment);
router.delete('/:commentID', VerifyToken, deleteComment);



export default router;