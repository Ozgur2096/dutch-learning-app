import express from 'express';
import {
  getUsers,
  createUser,
  loginUser,
  //updateUser,
  //deleteUser,
} from '../controllers/user.js';

const userRouter = express.Router();

userRouter.route('/').get(getUsers);
userRouter.route('/signup').post(createUser);
userRouter.route('/login').post(loginUser);
//userRouter.route('/:id').patch(updateUser).delete(deleteUser);

export default userRouter;
