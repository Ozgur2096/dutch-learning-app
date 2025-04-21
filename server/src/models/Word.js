import mongoose from 'mongoose';

const wordSchema = new mongoose.Schema({
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
