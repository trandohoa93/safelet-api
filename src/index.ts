import express, { Express } from 'express';
import dotenv from 'dotenv';
import {router as users} from './modules/users';
import {router as alarms} from './modules/alarms';
import mongoose from 'mongoose';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use('/api/users', users);
app.use('/api/', alarms)


const bootstrap = async () => {
  try {
    console.log('🚀 Connecting to MongoDB');
    await mongoose.connect(process.env.MONGO_URI);
    console.log('🚀 Connected to MongoDB');
    app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
  } catch (error) {
    console.log(error)
  }
}

bootstrap();






