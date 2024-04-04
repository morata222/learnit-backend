import ApiError from "../middleware/errors/customError.js";
export const SignUp = (req, res, next) => {
  const body = req.body;
  if(!body.username){
     next(new ApiError('Incorrect email or password' , 403));
  }
  res.status(200).json({
    message: "Sign Up Route",
    data: body,
  });
};

export const SignIn = (req, res) => {};

export const SignOut = (req, res) => {};

export const ForgotPassword = (req, res) => {};
