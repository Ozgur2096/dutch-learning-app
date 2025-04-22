import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

/** GET USERS
 * @route GET /api/user/
 * @desc Get all users
 */
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/** CREATE USER
 * @route POST /api/user/signup
 * @desc Create a new user
 */
export const createUser = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({
      username,
      password: hashedPassword,
      email,
    });

    // Generate JWT token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '2h',
    });

    res.status(201).json({ userId: newUser._id, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/** LOGIN USER
 * @route POST /api/user/login
 * @desc Login a user
 */
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '2h',
    });

    res.status(200).json({ userId: user._id, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
