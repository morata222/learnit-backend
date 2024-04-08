import bcrypt from "bcrypt";

import ApiError from "../../middleware/errors/customError.js";
import User from "../../models/user/user.js";
import checkFields from "../../helpers/auth/signup/checkFields.js";
import sendEmail from "../../helpers/auth/signup/sendEmail.js";

import { generateJwtToken } from "../../utils/jwt/jwt.js";


export const VerifyCode = (req, res, next) => {
  const { verificationCode } = req.body;
  User.findOne({ verificationCode})
    .then((user) => {
      if (!user) {
        return next(new ApiError("Invalid code", 400));
      }
      user.isVerified = true;
      user.save().then((user) => {
        res.status(200).json({
          message: "User verified successfully",
          data: { user: user.username, email: user.email },
        });
      }).catch((error) => {
        return next(new ApiError(error.message, 500));
      });
    })
    .catch((error) => {
      return next(new ApiError(error.message, 500));
    });
};
export const SignUp = (req, res, next) => {
  const { email ,  password } = req.body;
  const verificationCode = Math.floor(100000 + Math.random() * 900000);

  if (!checkFields(req.body, next)) {
    return next(new ApiError("All fields are required", 400));
  }
  User.findOne({ email })
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
          verificationCode,
        });

        // save the user with hashed password
        newUser
          .save()
          .then((user) => {
            // generate jwt token and send it as a cookie
            const token = generateJwtToken({
              user: user.username,
              email: user.email,
            });
            sendEmail(email, verificationCode);
            res
              .status(201)
              .cookie("token", token, { httpOnly: true })
              .json({
                message: "email verification code sent to your email",
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



export const SignIn = async (req, res , next) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      next(new ApiError('User not found', 404));
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      next(new ApiError('Wrong password', 401));
    }

    // Generate JWT token
    const token = generateJwtToken({
      user: user.username,
      email: user.email,
    });

    // Send response
    res.status(200).json({ message: 'Signed in successfully', token });
  } catch (error) {
     next(new ApiError(error.message, 500));
  }
};

export const SignOut = (req, res , next) => {
  res.clearCookie("token").json({ message: "Sign out successfully" });
};

export const RequestChangePassword = (req, res , next) => {
  const { email } = req.body;
  const verificationCode = Math.floor(100000 + Math.random() * 900000);
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return next(new ApiError("User not found", 404));
      }
      user.verificationCode = verificationCode;
      user.save().then((user) => {
        sendEmail(email, verificationCode);
        res.status(200).json({
          message: "Verification code sent to your email",
          data: { user: user.username, email: user.email },
        });
      }).catch((error) => {
        return next(new ApiError(error.message, 500));
      });
    })
    .catch((error) => {
      return next(new ApiError(error.message, 500));
    });
};

export const ResetPassword = (req, res , next) => {
  const { email, password, confirmPassword } = req.body;
  User.findOne({ email }).then((user) => {
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
      user.save().then((user) => {
        res.status(200).json({
          message: "Password reset successfully",
          data: { user: user.username, email: user.email },
        });
      }).catch((error) => {
        return next(new ApiError(error.message, 500));
      });
    });
  }
  ).catch((error) => {
    return next(new ApiError(error.message, 500));
  });
}