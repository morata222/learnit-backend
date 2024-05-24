import express from "express";
import { checkFields } from "../../middleware/checkFields.js";

import {
  SignIn,
  RequestChangePassword,
  SignOut,
  SignUp,
  VerifyCode,
  ResetPassword,
  RequestVerificationCode,
  SignInWithProvider
} from "../../controllers/user/auth.js";

const router = express.Router();

router.post("/request-verification-code", RequestVerificationCode);
router.post("/verifycode", VerifyCode);
router.post("/signup",checkFields, SignUp);
router.post("/signin",checkFields, SignIn);
router.post("/signin-provider",checkFields, SignInWithProvider);
router.post("/signout", SignOut);
router.post("/request-change-password", RequestChangePassword);
router.post("/reset-password", ResetPassword);

export default router;
