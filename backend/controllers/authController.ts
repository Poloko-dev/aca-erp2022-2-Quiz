import { Request, Response, RequestHandler } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User';
declare module 'express-session' {
  interface SessionData {
    userId?: string;
  }
}

export const registerUser: RequestHandler = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const existing = await User.findOne({ email });
    if (existing) {
      res.status(400).json({ message: 'Email already exists' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPassword });

    res.status(201).json({ message: 'User registered', userId: newUser._id });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed', error: (err as Error).message });
  }
};

export const loginUser: RequestHandler = async (req, res)  => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: 'Invalid credentials' });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: 'Invalid credentials' });
      return;
    }

    req.session.userId = user._id.toString();

    req.session.save((err) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to save session' });
      }

      res.status(200).json({ message: 'Login successful', userId: user._id });
    });

  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: (err as Error).message });
  }
};
