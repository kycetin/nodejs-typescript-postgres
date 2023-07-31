import "reflect-metadata"
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

import users from './routes/users';
import auth from './routes/auth';

const app  = express();

app.use(express.json());
app.use('/api', users, auth);

const port = process.env.SERVER_PORT;

app.listen(port, () => {
  console.log(`Application running on port ${port}.`);
});

export default app;
