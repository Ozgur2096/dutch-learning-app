import express from 'express';
import cors from 'cors';

import wordRouter from './routes/word.js';

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/word', wordRouter);

export default app;
