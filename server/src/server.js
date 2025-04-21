import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import connectDB from './db/connectDB.js';
import app from './app.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });
const PORT = process.env.PORT;

const startServer = async () => {
  try {
    const connection = await connectDB();
    console.log('MongoDB connected:', connection.connection.host);
    app.listen(PORT, () => {
      console.log('test', process.env.PORT);
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

// Start the server
startServer();
