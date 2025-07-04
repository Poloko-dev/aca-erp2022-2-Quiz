import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import questionRoutes from './routes/questionRoutes';
import authRoutes from './routes/authRoutes';
import scoreRoutes from './routes/scoreRoutes';
import dbConnection from './utils/db';

dotenv.config();
const app = express();

dbConnection();

app.use(cors({
  origin: 'https://aca-erp2022-2-quiz-sable.vercel.app',
  credentials: true, 
}));

app.use(express.json());

app.use('/api/questions', questionRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/score', scoreRoutes);

export default app;

