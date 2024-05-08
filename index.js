// import packages
import express from "express";
import bodyParser from "body-parser";
<<<<<<< HEAD
import cookieParser from "cookie-parser";
=======
import cookieParser from 'cookie-parser';
>>>>>>> 5569416dc245e602c972125efd4524508195ac6d
import cors from "cors";
import dotenv from "dotenv";

// import files
import MongoConnection from "./config/db.js";
import errorHandler from "./middleware/errors/handleError.js";
import Routes from "./routes/index.js";
<<<<<<< HEAD
import { scheduleMonthlyRankingsReset } from "./utils/checkStartOfMonth.js";
=======
import {scheduleMonthlyRankingsReset} from './utils/checkStartOfMonth.js'
>>>>>>> 5569416dc245e602c972125efd4524508195ac6d

// middlewares
const app = express(); // express app
dotenv.config(); // environment variables
app.use(cors()); // cors
app.use(bodyParser.json()); // parse application/json
app.use(cookieParser()); // parse cookies
<<<<<<< HEAD
app.use("/", Routes); // Using the routes
=======
app.use('/' , Routes); // Using the routes
>>>>>>> 5569416dc245e602c972125efd4524508195ac6d
app.use(errorHandler); // Using the custom error handling middleware should be the last middleware in the stack
app.get("/", (req, res) => {
  res.send("Welcome to the backend of the e-learning platform");
});

scheduleMonthlyRankingsReset(); // Schedule the monthly rankings reset

// application start
MongoConnection()
  .then(() => {
    app.listen(8000, () => console.log("Server Running on Port 8000"));
  })
  .catch((error) => console.log(error));
