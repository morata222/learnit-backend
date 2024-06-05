import express from 'express';

import {addCourseToInProgressCourse,getInProgressCourse,removeCourseFromInProgressCourse} from '../../controllers/user/inprogress-courses.js';

const router = express.Router();

router.get('/:userID', getInProgressCourse);
router.put('/addNewCourseToWishlist',addCourseToInProgressCourse );
router.put('/removeCourseFromWishlist',removeCourseFromInProgressCourse );

export default router;