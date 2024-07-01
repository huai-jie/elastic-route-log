import express, { json } from 'express';
import analyticBehaviour from './middleware/analyticBehaviour.js';

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(json());

// Middlware to track the success api call for analytic
app.use(analyticBehaviour);

// Import and use the auth routes
import authRoutes from './routes/auth.js';
app.use('/auth', authRoutes);

import accRoutes from './routes/account.js';
app.use('/account', accRoutes);

// 'Home' route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
