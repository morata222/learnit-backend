 import ApiError from "./errors/customError.js";
 export const checkFields = (req , res , next) => {
   for (let key in req.body) {
      if (!req.body[key]) {
          return next(new ApiError(`${key} is required`, 400));
      }
   }
   next()
}
