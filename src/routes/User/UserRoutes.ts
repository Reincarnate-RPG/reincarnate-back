import { User } from '@/entities/User/User';
import { checkToken } from '@/middlewares/CheckToken';
import { authUserController } from '@/useCases/User/AuthUser';
import { createUserController } from '@/useCases/User/CreateUser';
import { refreshTokenController } from '@/useCases/User/RefreshToken';
import { Request, Router, Response, NextFunction } from 'express';

const router = Router();
router.post('/auth/register', (res, req) => {
  return createUserController.handle(res, req);
});

// TODO: https://jasonwatmore.com/post/2018/11/28/nodejs-role-based-authorization-tutorial-with-example-api Auth role route

router.post('/auth/login', (res, req) => {
  return authUserController.handle(res, req);
});
router.post('/auth/refresh-token', (res, req) => {
  return refreshTokenController.handle(res, req);
});

router.get('/user', checkToken, async (req: Request, res: Response) => {
  try {
    const user = await User.find().select('-password');
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

export { router as userRoutes };
