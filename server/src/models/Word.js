import mongoose from 'mongoose';

const wordSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  word: {
    type: String,
    required: true,
  },
  definition: {
    type: String,
    required: true,
  },
  synonyms: {
    type: [String],
    default: [],
  },
  antonyms: {
    type: [String],
    default: [],
  },
});

const Word = mongoose.model('Word', wordSchema);
export default Word;
