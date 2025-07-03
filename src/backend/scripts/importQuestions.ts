// scripts/importQuestions.ts
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Question from '../models/Question';
import questions from '../data/questionData'; 

dotenv.config();

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    await Question.deleteMany();
    await Question.insertMany(questions);
    console.log('Data Imported!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

importData();
