import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  id: Number,
  question: String,
  options: [String],
  answer: String,
});

const Question = mongoose.model('Question', QuestionSchema, 'quizes');

export default Question;
