import { Router } from 'express';

const router = new Router();

router.get('/', (req, res) => {
  res.send('olá');
});

export default router;
