import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { userRoutes } from '@/routes/User/UserRoutes';
import cors from 'cors';
import { routes } from '@/routes/routes';
import { worldRoutes } from '@/routes/World/WorldRoutes';
import { profileRoutes } from '@/routes/Profile/ProfileRoutes';

dotenv.config();
const app: Express = express();
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.use(routes);
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Done!' });
});
export { app };
