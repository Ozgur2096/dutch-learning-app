import express from 'express';
import {
  getUsers,
  createUser,
  //updateUser,
  //deleteUser,
} from '../controllers/user.js';

const userRouter = express.Router();

userRouter.route('/').get(getUsers).post(createUser);
//userRouter.route('/:id').patch(updateUser).delete(deleteUser);

export default userRouter;
