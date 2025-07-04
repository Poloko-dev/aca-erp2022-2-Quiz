import express from 'express';
import cors from 'cors';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import questionRoutes from './routes/questionRoutes';
import dbConnection from './utils/db';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import scoreRoutes from './routes/scoreRoutes';

dotenv.config();
const app = express();

dbConnection();

if (!process.env.SESSION_SECRET) {
  throw new Error('SESSION_SECRET environment variable is not set!');
}

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI!,
    collectionName: 'sessions',
    ttl: 24 * 60 * 60,
  }),
  cookie: {
    httpOnly: true,
    secure: true,
    maxAge: 1000 * 60 * 60,
    sameSite: 'none',
  }
}));

app.use(cors({
  origin: 'https://aca-erp2022-2-quiz-sable.vercel.app',
  credentials: true
}));

app.use(express.json());

app.use('/api/questions', questionRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/score', scoreRoutes);

app.get('/api/session', (req, res) => {
  res.json({
    userId: req.session.userId,
    session: req.session,
    message: req.session.userId ? 'User is logged in' : 'No active session'
  });
});

export default app;


