// routes/auth.js
import { Router } from 'express';
const router = Router();

router.get('/profile', (req, res) => {
  res.send('Account profile route');
});


export default router;
