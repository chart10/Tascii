import express from 'express';
import pingRoute from './routes/pingRoute.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! The backend server for Tascii is live!');
});

app.use('/ping', pingRoute);

app.listen(port, () => {
  console.log(`Tascii server listening on port ${port}`);
});
