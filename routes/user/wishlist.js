import express from 'express';

import {addCourseToWishlist,createWishlist,getWishlist,removeCourseFromWishlist , getAllUserWishlist , createWishlistForEachUser} from '../../controllers/user/wishlist.js';

const router = express.Router();

router.post('/createforeachuser', createWishlistForEachUser);
router.get('/all', getAllUserWishlist);
router.get('/:userID', getWishlist);
router.put('/addNewCourseToWishlist',addCourseToWishlist );
router.put('/removeCourseFromWishlist',removeCourseFromWishlist );

export default router;