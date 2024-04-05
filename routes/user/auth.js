import express from "express";

import {
  SignIn,
  ForgotPassword,
  SignOut,
  SignUp,
} from "../../controllers/auth.js";

const router = express.Router();

router.post("/signup", SignUp);
router.post("/signin", SignIn);
router.post("/signout", SignOut);
router.post("/forget-password", ForgotPassword);

export default router;
