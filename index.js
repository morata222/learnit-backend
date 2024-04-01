// import packages
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

// import files
import MongoConnection from './config/db.js';

// middlewares
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

// routes

// application start
MongoConnection().then(() => {
  app.listen(8000, () => console.log('Server Running on Port 8000'));
}).catch((error) => console.log(error));

