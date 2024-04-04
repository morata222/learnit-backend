// import packages
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';


// import files
import MongoConnection from './config/db.js';
import authRoutes from './routes/auth.js'
import errorHandler from './middleware/errors/handleError.js';


// middlewares
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
  // app.use(handleError);
  
  // routes
  app.use('/auth', authRoutes);

  // Using the custom error handling middleware
  app.use(errorHandler);

// application start
MongoConnection().then(() => {
  app.listen(8000, () => console.log('Server Running on Port 8000'));
}).catch((error) => console.log(error));

