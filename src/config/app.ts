import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { userRoutes } from '@/routes/User/UserRoutes';

dotenv.config();
const app: Express = express();

app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.static('public'));
app.use(express.json());
app.use(userRoutes);
app.get('/', (req, res) => {
  res.json({ message: 'Done!' });
});
export { app };
