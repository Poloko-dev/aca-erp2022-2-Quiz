import express from 'express';
import cors from 'cors';
import questionRoutes from './routes/questionRoutes';
import dbConnection from './utils/db';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';

dotenv.config();
const app = express();

dbConnection();

app.use(cors());
app.use(express.json());

app.use('/api/questions', questionRoutes);
app.use('/api/auth', authRoutes);

export default app;
