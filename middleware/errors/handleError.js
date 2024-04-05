const errorHandler = (err, req, res, next) => {
  console.log(err);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({ message:message });
};

export default errorHandler;
