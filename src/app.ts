import "reflect-metadata"
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app  = express();

app.use(express.json());

const port = process.env.SERVER_PORT;

app.listen(port, () => {
  console.log(`Application running on port ${port}.`);
});

export default app;
