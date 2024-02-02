import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pingRouter from './routes/pingRoute.js';
import taskRouter from './routes/taskRoute.js';
import connectDB from './daos/connectDB.js';

dotenv.config();

const app = express();
const port = 3000;
const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173'];

app.use(express.json());
app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

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
