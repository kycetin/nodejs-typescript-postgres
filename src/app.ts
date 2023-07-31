import "reflect-metadata"
import dotenv from 'dotenv';
import express from 'express';
import swaggerDocs from '../swagger'

dotenv.config();

import users from './routes/users';
import auth from './routes/auth';

const app = express();


app.use(express.json());
app.use('/api', users, auth);

const port: number = process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT, 10) : 3000;
console.log(port)

app.listen(port, () => {
  console.log(`Application running on port ${port}.`);
  swaggerDocs(app, port)
});

export default app;
