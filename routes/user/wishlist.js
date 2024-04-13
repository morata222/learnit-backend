import express from 'express';

import {addCourseToWishlist,createWishlist,getWishlist,removeCourseFromWishlist} from '../../controllers/user/wishlist.js';

const router = express.Router();

router.get('/:userID', getWishlist);
router.put('/addNewCourseToWishlist',addCourseToWishlist );
router.put('/removeCourseFromWishlist',removeCourseFromWishlist );

export default router;