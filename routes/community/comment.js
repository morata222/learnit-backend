import express from 'express';

import { VerifyToken } from '../../middleware/jwt/verifyToken.js';
import { checkFields } from '../../middleware/checkFields.js';
import {createNewCommunity,deleteCommunity,getAllCommunities,getCommunity,updateCommunityInfo} from '../../controllers/community/communtiy.js';

const router = express.Router();

router.post('/createNewCommunity', createNewCommunity);
router.get('/getAllCommunities', getAllCommunities);
router.get('/:communityID', getCommunity);
router.put('/:communityID', updateCommunityInfo);
router.delete('/:communityID', deleteCommunity);

export default router;