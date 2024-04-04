const errorHandler = (err, req, res, next) => {
  console.log(err);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(cutomError.statusCode).json({ message: cutomError.message });
};

export default errorHandler;
