import express from 'express';
import mongoose from'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

//Config imports
import config from './config';

// Routes imports
import reportRoutes from './routes/report.routes';

const app = express();

// MiddleWares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

// MongoDB Connection
mongoose.connect(config.MONGO_URL, (error) => {
  console.log(config.MONGO_URL);
  if (error) {
    console.error('Please make sure Mongodb is installed and running!');
    throw error;
  }
});

// Routes
app.use('/report', reportRoutes);

export default app;