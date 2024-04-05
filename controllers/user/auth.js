import ApiError from "../../middleware/errors/customError.js";
import User from "../../models/user/user.js";
import bcrypt from "bcrypt";
import { generateJwtToken } from "../../utils/jwt/jwt.js";
export const SignUp = (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return next(new ApiError("Please fill in all fields", 400));
  }
  User.findOne({ email })
    .then((user) => {
      if (user) {
        return next(new ApiError("User already exists", 400));
      }
      bcrypt.hash(password, 12, (err, hashedPassword) => {
        if (err) {
          return next(new ApiError(err.message, 500));
        }
        const newUser = new User({
          username,
          email,
          password: hashedPassword,
        });
        newUser
          .save()
          .then((user) => {
            const token = generateJwtToken({
              user: user.username,
              email: user.email,
            });
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
      return next(new ApiError("Server Error", 500));
    });
};

export const SignIn = (req, res) => {};

export const SignOut = (req, res) => {};

export const ForgotPassword = (req, res) => {};
