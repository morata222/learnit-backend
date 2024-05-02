import express from 'express';

import {getAllUsers,getUser,updateUserInfo} from '../../controllers/user/user.js';

const router = express.Router();

router.get('/all',getAllUsers );
router.get('/:userID', getUser);
router.put('/:userID', updateUserInfo)


export default router;