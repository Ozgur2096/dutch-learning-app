import express from 'express';

import {
  //getWord,
  getWords,
  createWord,
  //updateWord,
  deleteWord,
} from '../controllers/word.js';

const wordRouter = express.Router();

wordRouter.route('/').post(createWord);
wordRouter.route('/:userid').get(getWords);
wordRouter.route('/:wordId').delete(deleteWord);
//wordRouter.route('/:id').get(getWord).patch(updateWord).delete(deleteWord);

export default wordRouter;
