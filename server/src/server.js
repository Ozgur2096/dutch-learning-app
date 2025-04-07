import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
app.use(cors());
const PORT = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello from from homepage');
});

const startServer = async () => {
  try {
    //await connectDB();
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
