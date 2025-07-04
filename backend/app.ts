import express from 'express';
import cors from 'cors';
import session from 'express-session';
import questionRoutes from './routes/questionRoutes';
import dbConnection from './utils/db';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import scoreRoutes from './routes/scoreRoutes';

dotenv.config();
const app = express();

dbConnection();

app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 1000 * 60 * 60,
    sameSite: 'lax' 
  }
}));

app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true
}));

app.use(express.json());

app.use('/api/questions', questionRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/score', scoreRoutes);

// Debug route to inspect session
app.get('/api/session', (req, res) => {
  res.json({
    userId: req.session.userId,
    session: req.session,
    message: req.session.userId ? 'User is logged in' : 'No active session'
  });
});


export default app;

