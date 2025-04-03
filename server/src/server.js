//import dotenv from 'dotenv';
//dotenv.config({ path: '../.env' });
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
//const PORT = "process.env.PORT";
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello from from homepage');
});

const startServer = async () => {
  try {
    //await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

// Start the server
startServer();
