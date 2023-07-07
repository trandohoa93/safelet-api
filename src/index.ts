import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/api', (req: Request, res: Response) => {
  res.send('Hello this is API Router');
});

app.get('/api/:id', (req: Request, res: Response) => {
  console.log(req.params.id)
  res.send('Hello this is API Router');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});