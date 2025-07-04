import { RequestHandler } from 'express';
import User from '../models/User';

export const updateUserScore: RequestHandler = async (req, res) => {
  const userId = (req as any).user?.userId;
  const { score } = req.body;

  if (!userId) {
    res.status(401).json({ message: 'Unauthorized: userId missing from token' });
    return;
  }

  try {
    const user = await User.findByIdAndUpdate(userId, { score }, { new: true });
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.json({ message: 'Score updated', user });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update score', error: (err as Error).message });
  }
};

export const getLeaderboard: RequestHandler = async (req, res) => {
  const currentUserId = (req as any).user.userId;

  try {
    const users = await User.find({ score: { $ne: null } })
      .sort({ score: -1 })
      .select('_id email score');

    res.json({
      users,
      currentUserId,
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to load leaderboard', error: (err as Error).message });
  }
};