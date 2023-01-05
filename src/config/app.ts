import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { userRoutes } from '@/routes/User/UserRoutes';
import cors from 'cors';

dotenv.config();
const app: Express = express();
// TODO: change mongoose to PRISMA
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use(userRoutes);
app.get('/', (req, res) => {
  res.json({ message: 'Done!' });
});
export { app };
