import express from 'express';
import { getAllQuestions } from '../controllers/questionController';
import { isAuthenticated } from '../middlewares/auth'; 

const router = express.Router();

router.get('/', isAuthenticated, getAllQuestions);

export default router;
