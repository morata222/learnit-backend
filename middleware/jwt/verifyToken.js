import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import ApiError from "../errors/customError.js";
import User from "../../models/user/user.js";
import { generateJwtToken } from "../../utils/jwt/jwt.js";

dotenv.config();

export const VerifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return next(new ApiError("You are not authenticated", 401));

  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, payload) => {
    if (err) {
      // Token is no longer valid, check the user's lastAccessToken in the DB
      console.log("token expired");
      const decodedToken = jwt.decode(token);
      console.log(decodedToken);
      if (!decodedToken) return next(new ApiError("Invalid token", 403));

      User.findById( decodedToken.user._id )
        .then((user) => {
          if (!user) return next(new ApiError("User not found", 403));

          if (user.lastAccessToken != token) {
            // Continue with your logic here
            console.log("tokens do not match");
            console.log("lastToken", user.lastAccessToken);
            console.log("token", token);
            return next(new ApiError("You are not authenticated", 401));
          } else {
            console.log("new token generated hereeeeeeeeeeeeeeeeee");
            // I need to generate new access token and pass it to the cookies and save it in the DB
            const token = generateJwtToken({
              _id: user._id,
              isInstructor: user.isInstructor,
              isVerified: user.isVerified,
            }); 
            console.log("new token", token);
            res.cookie("accessToken", token, { httpOnly: true });
            user.lastAccessToken = token;
            user
              .save()
              .then((user) => {
                console.log("new token saved in the DB");
                req.userId = payload.user._id;
                req.isInstructor = user.isInstructor;
                next();
              })
              .catch((err) => next(new ApiError(err.message, 500)));
          }
        })
        .catch((err) => next(new ApiError(err.message, 500)));
    } else {
      req.userId = payload.user._id;
      req.isInstructor = payload.user.isInstructor;
      next();
    }
  });
};
