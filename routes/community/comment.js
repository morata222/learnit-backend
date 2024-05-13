import express from 'express';

import { VerifyToken } from '../../middleware/jwt/verifyToken.js';
import { checkFields } from '../../middleware/checkFields.js';
import {createComment,deleteComment,getComment,getComments,updateComment} from '../../controllers/community/comment.js';

const router = express.Router();
// remember to put verifyToken back in the routes
router.post('/create', checkFields, createComment);
router.get('/all', getComments);
router.get('/:commentID', getComment);
router.put('/:commentID', checkFields, updateComment);
router.delete('/:commentID', deleteComment);



export default router;