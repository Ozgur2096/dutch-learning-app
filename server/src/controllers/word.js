import Word from '../models/Word.js';

/** GET WORDS
 *
 * @route GET /api/words/
 * @desc Get all words
 */

export const getWords = async (req, res) => {
  try {
    const words = await Word.find();
    res.status(200).json(words);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/** CREATE WORD
 * @route POST /api/word/
 * @desc Create a new word
 */

export const createWord = async (req, res) => {
  const { userId, word, definition, synonyms, antonyms } = req.body;

  try {
    const newWord = await Word.create({
      userId,
      word,
      definition,
      synonyms,
      antonyms,
    });
    res.status(201).json(newWord);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
