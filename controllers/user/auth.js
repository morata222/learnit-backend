import bcrypt from "bcrypt";

import ApiError from "../../middleware/errors/customError.js";
import User from "../../models/user/user.js";
import checkFields  from "../../helpers/auth/signup/checkFields.js";
import sendEmail from "../../helpers/auth/signup/sendEmail.js";

import { generateJwtToken } from "../../utils/jwt/jwt.js";
export const SignUp = (req, res, next) => {
  if(!checkFields(req.body , next)){
    return next(new ApiError("All fields are required", 400));
  }
  const { email, password } = req.body;

  User.findOne({ email})
    .then((user) => {
      // check if user already exists
      if (user) {
        return next(new ApiError("User already exists", 400));
      }
      // hash the password
      bcrypt.hash(password, 12, (err, hashedPassword) => {
        if (err) {
          return next(new ApiError(err.message, 500));
        }
        const newUser = new User({
          ...req.body,
          password: hashedPassword,
        })

        // save the user with hashed password
        newUser
          .save()
          .then((user) => {
            // generate jwt token and send it as a cookie
            const token = generateJwtToken({
              user: user.username,
              email: user.email,
            });
            // send verification email
            res
              .status(201)
              .cookie("token", token, { httpOnly: true })
              .json({
                message: "User Created Successfully",
                data: { user: user.username, email: user.email },
              });
          })
          .catch((error) => {
            return next(new ApiError(error.message, 500));
          });
      });
    })
    .catch((error) => {
      return next(new ApiError(error.message, 500));
    });
};

export const SignIn = (req, res) => {
  const { email, password } = req.body
  const verificationCode = Math.floor(100000 + Math.random() * 900000);
  sendEmail(email, verificationCode);
  res.status(200).json({ message: "Verification code sent to your email" });
};

export const SignOut = (req, res) => {};

export const ForgotPassword = (req, res) => {};
