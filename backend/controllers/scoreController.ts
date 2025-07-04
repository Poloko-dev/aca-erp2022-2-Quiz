import { RequestHandler } from 'express';
import User from '../models/User';

export const updateUserScore: RequestHandler = async (req, res) => {
  const userId = req.session.userId;
  const { score } = req.body;

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

