import express from 'express';
import dotenv from 'dotenv';
import pingRouter from './routes/pingRoute.js';
import connectDB from './daos/connectDB.js';

dotenv.config();

const app = express();
const port = 3000;

app.use('/api/v1/', pingRouter);

const start = async (url) => {
  try {
    await connectDB(url);
    app.listen(port, () => {
      console.log(`Tascii server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start(process.env.MONGO_DB_URI);
