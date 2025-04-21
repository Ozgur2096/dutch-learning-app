import express from 'express';

import {
  //getWord,
  getWords,
  createWord,
  //updateWord,
  //deleteWord,
} from '../controllers/word.js';

const wordRouter = express.Router();

wordRouter.route('/').get(getWords).post(createWord);
//wordRouter.route('/:id').get(getWord).patch(updateWord).delete(deleteWord);

export default wordRouter;
