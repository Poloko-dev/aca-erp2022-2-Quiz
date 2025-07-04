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

app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI || 'your-mongodb-connection-string',
    collectionName: 'sessions',
    ttl: 24 * 60 * 60, // 1 day in seconds
  }),
  cookie: {
    httpOnly: true,
    secure: true,       // true if HTTPS
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


