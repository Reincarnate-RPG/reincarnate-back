import { profileRoutes } from '@/routes/Profile/ProfileRoutes';
import { Router } from 'express';
import { userRoutes } from './User/UserRoutes';
import { worldRoutes } from './World/WorldRoutes';
import { authRoutes } from './Auth/AuthRoutes';
const router = Router();

router.use('/world', worldRoutes);
router.use('/profile', profileRoutes);
router.use('/user', userRoutes);
router.use('/auth', authRoutes);

export { router as routes };
