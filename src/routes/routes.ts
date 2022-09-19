import { Router } from 'express';
import { userRoutes } from './User/UserRoutes';
const router = Router();

let routes = { ...router, ...userRoutes };

export { routes };
