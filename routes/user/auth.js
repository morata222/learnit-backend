import express from "express";

import {
  SignIn,
  RequestChangePassword,
  SignOut,
  SignUp,
  VerifyCode,
  ResetPassword,
} from "../../controllers/user/auth.js";

const router = express.Router();

router.post("/verifycode", VerifyCode);
router.post("/signup", SignUp);
router.post("/signin", SignIn);
router.post("/signout", SignOut);
router.post("/request-change-password", RequestChangePassword);
router.post("/reset-password", ResetPassword);

export default router;
