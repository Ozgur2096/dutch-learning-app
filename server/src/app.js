import express from 'express';
import cors from 'cors';

import wordRouter from './routes/word.js';
import userRouter from './routes/user.js';

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/word', wordRouter);
app.use('/api/user', userRouter);

export default app;
