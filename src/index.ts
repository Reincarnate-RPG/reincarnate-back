import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { connect } from 'mongoose';
import userRoutes from './routes/userRoutes';

dotenv.config();
const app: Express = express();
const port = process.env.PORT;

app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

app.use('/user', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.json({ messsage: 'Express + TypeScript Server' });
});

connect(
  'mongodb+srv://reincarnate:FR2g84d2twv2MRBJ@reincarnate0.tjb9keh.mongodb.net/core?retryWrites=true&w=majority'
)
  .then(() => {
    console.log('⚡️ Connected at MongoDB ⚡️');
    app.listen(port, () => {
      console.log(
        `⚡️[server]: Server is running at https://localhost:${port}`
      );
    });
  })
  .catch(err => {
    console.log(err);
  });
