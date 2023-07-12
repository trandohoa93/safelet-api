import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import {router as users} from './modules/users';
import {router as alarms} from './modules/alarms';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use('/api/users', users);
app.use('/api/alarms', alarms)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});