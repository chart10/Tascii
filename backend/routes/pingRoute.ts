import { Router } from 'express';

const router = Router();

router.route('/').get((req, res) => {
  res.send('Hello World! The backend server for Tascii is live!');
});

router.route('/ping').get((req, res) => {
  res.send('Pong!');
});

export default router;
