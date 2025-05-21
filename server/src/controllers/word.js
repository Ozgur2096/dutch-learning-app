import Word from '../models/Word.js';

/** GET WORDS By USER ID
 *
 * @route GET /api/word/userId
 * @desc Get all words
 */

export const getWords = async (req, res) => {
  const { userid } = req.params;

  if (!userid) {
    return res.status(400).json({ message: 'User ID is required' });
  }
  try {
    const words = await Word.find({ userId: userid });
    res.status(200).json(words);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/** DELETE WORD
 * @route DELETE /api/word/wordId
 * @desc delete a word
 */

export const deleteWord = async (req, res) => {
  const { wordId } = req.params;

  if (!wordId) {
    return res.status(400).json({ message: 'Word ID is required' });
  }
  try {
    const deletedWord = await Word.findByIdAndDelete(wordId);
    if (!deletedWord) {
      return res.status(404).json({ message: 'Word not found' });
    }
    res.status(200).json({ message: 'Word deleted successfully' });
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
