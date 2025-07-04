import express from 'express';
import { isAuthenticated } from '../middlewares/auth';
import { updateUserScore, getLeaderboard } from '../controllers/scoreController';

const router = express.Router();

router.post('/', isAuthenticated, updateUserScore);

router.get('/leaderboard', isAuthenticated, getLeaderboard);

export default router;
