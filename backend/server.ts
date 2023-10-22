import express from 'express';
import dotenv from 'dotenv';
import pingRouter from './routes/pingRoute.js';
import taskRouter from './routes/taskRoute.js';
import connectDB from './daos/connectDB.js';

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/v1/', pingRouter);
app.use('/api/v1/task/', taskRouter);

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
