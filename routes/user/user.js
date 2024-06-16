import express from 'express';

import {getAllUsers,getUser,updateUserInfo , deleteAllUsers} from '../../controllers/user/user.js';

const router = express.Router();

router.get('/all',getAllUsers );
router.get('/:userID', getUser);
router.put('/:userID', updateUserInfo)
// router.delete('/deleteAll', deleteAllUsers)


export default router;