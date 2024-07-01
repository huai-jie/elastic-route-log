// routes/auth.js
import { Router } from 'express';
const router = Router();

// Import middleware
import logRequest from '../middleware/logRequest.js';

// Use middleware for all routes in this router
// router.use(logRequest);

router.post('/login', (req, res) => {
  res.send('Login route');
});

router.post('/register', (req, res) => {
  res.send('Register route');
});

export default router;
