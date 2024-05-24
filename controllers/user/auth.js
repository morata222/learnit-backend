import bcrypt from "bcrypt";

import ApiError from "../../middleware/errors/customError.js";
import User from "../../models/user/user.js";
import { createNewUserProgress } from "../../controllers/user/user-progress.js";
import { createWishlist } from "../../controllers/user/wishlist.js";
import sendEmail from "../../helpers/sendEmail.js";

import { generateJwtToken } from "../../utils/jwt/jwt.js";

export const RequestVerificationCode = (req, res, next) => {
  const { email } = req.body;
  const verificationCode = Math.floor(100000 + Math.random() * 900000);
  sendEmail(email, verificationCode);
  res.cookie("verificationCode", verificationCode, { httpOnly: true });
  res.status(200).json({
    message: "Verification code sent to your email",
    data: { email },
  });
};
export const VerifyCode = (req, res, next) => {
  const { verificationCode } = req.body;
  if (req.cookies.verificationCode !== verificationCode.toString()) {
    return next(new ApiError("Invalid code", 400));
  }
  User.findOne({ verificationCode })
    .then((user) => {
      if (!user) {
        return next(new ApiError("User not found", 404));
      }
      user.isVerified = true;
      user
        .save()
        .then(async (user) => {
          await createNewUserProgress(user._id);
          await createWishlist(user._id);
          res.status(200).json({
            message: "User verified successfully , please sign in to continue",
            data: { user: user.username, email: user.email },
          });
        })
        .catch((error) => {
          return next(new ApiError(error.message, 500));
        });
    })
    .catch((error) => {
      return next(new ApiError(error.message, 500));
    });
};
export const SignUp = (req, res, next) => {
  const { email, password } = req.body;
  const verificationCode = Math.floor(100000 + Math.random() * 900000);
  User.findOne({ email })
    .then(async (user) => {
      // check if user already exists
      if (user) {
        return next(new ApiError("User already exists", 400));
      }
      // hash the password
      bcrypt.hash(password, 12, (err, hashedPassword) => {
        if (err) {
          return next(new ApiError(err.message, 500));
        }
        // create a new wishlist

        const newUser = new User({
          ...req.body,
          password: hashedPassword,
          verificationCode,
          photoUrl:
            "https://res.cloudinary.com/dqhdokahr/image/upload/v1708426944/no_avatar_1_tjgnin.png",
        });

        // save the user with hashed password

        newUser
          .save()
          .then((user) => {
            res.status(201).json({
              message: "User Created Successfully",
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

export const SignIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      next(new ApiError("User not found", 404));
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      next(new ApiError("Wrong password", 401));
    }
    // Generate JWT token
    // const token = generateJwtToken({
    //   _id: user._id,
    //   isInstructor: user.isInstructor,
    //   isVerified: user.isVerified,
    // });

    // user.lastAccessToken = token;
    // await user.save();
    // Send response
    res
      .status(200)
      // .cookie("accessToken", token, { httpOnly: true })
      .json({ message: "Signed in successfully", user: user });
  } catch (error) {
    next(new ApiError(error.message, 500));
  }
};
export const SignInWithProvider = async (req, res, next) => {
  const { email, username, password, photoUrl } = req.body;
  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      const newUser = new User({
        email,
        username,
        photoUrl,
        password,
      });
      // save the user with hashed password

      bcrypt.hash(password, 12, (err, hashedPassword) => {
        if (err) {
          return next(new ApiError(err.message, 500));
        }
        // create a new wishlist

        const newUser = new User({
          email,
          username,
          photoUrl,
          password,
        });

        // save the user with hashed password

        newUser
          .save()
          .then((user) => {
            res.status(201).json({
              message: "User Signed in Successfully",
              user: user,
            });
          })
          .catch((error) => {
            return next(new ApiError(error.message, 500));
          });
      });
    } else {
      res.status(201).json({
        message: "User Signed in Successfully",
        user: user,
      });
    }
  } catch (error) {
    next(new ApiError(error.message, 500));
  }
};

export const SignOut = async (req, res, next) => {
  const { user } = req.user;
  user.lastAccessToken = null;
  await user.save();
  res.clearCookie("accessToken").json({ message: "Sign out successfully" });
};

export const RequestChangePassword = (req, res, next) => {
  const { email } = req.body;
  const verificationCode = Math.floor(100000 + Math.random() * 900000);
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return next(new ApiError("User not found", 404));
      }
      user.verificationCode = verificationCode;
      user
        .save()
        .then((user) => {
          sendEmail(email, verificationCode);
          res.status(200).json({
            message: "Verification code sent to your email",
            data: { user: user.username, email: user.email },
          });
        })
        .catch((error) => {
          return next(new ApiError(error.message, 500));
        });
    })
    .catch((error) => {
      return next(new ApiError(error.message, 500));
    });
};

export const ResetPassword = (req, res, next) => {
  const { email, password, confirmPassword } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return next(new ApiError("User not found", 404));
      }
      if (password !== confirmPassword) {
        return next(new ApiError("Passwords do not match", 400));
      }
      bcrypt.hash(password, 12, (err, hashedPassword) => {
        if (err) {
          return next(new ApiError(err.message, 500));
        }
        user.password = hashedPassword;
        user
          .save()
          .then((user) => {
            res.status(200).json({
              message: "Password reset successfully",
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
