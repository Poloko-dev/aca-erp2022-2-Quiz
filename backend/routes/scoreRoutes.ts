import express from 'express';
import { isAuthenticated } from '../middlewares/auth';
import { updateUserScore } from '../controllers/scoreController';

const router = express.Router();

router.post('/', isAuthenticated, updateUserScore);

export default router;
