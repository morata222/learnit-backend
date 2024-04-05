

import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_REFRESH_TOKEN = process.env.REFRESH_TOKEN_SECRET;

export const generateJwtToken = (user) => {
  return jwt.sign({ user }, JWT_REFRESH_TOKEN, { expiresIn: "1h" });
};

export const verifyJwtToken = (token) => {
  return jwt.verify(token, JWT_REFRESH_TOKEN);
};


