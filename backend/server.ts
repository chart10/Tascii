import express from 'express';
import pingRouter from './routes/pingRoute.js';

const app = express();
const port = 3000;

app.use('/api/v1/', pingRouter);

app.listen(port, () => {
  console.log(`Tascii server listening on port ${port}`);
});
