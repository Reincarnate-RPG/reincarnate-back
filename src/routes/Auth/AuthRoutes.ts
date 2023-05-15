import { Router } from 'express';
import { authUserController } from '@/useCases/User/AuthUser';
import { createUserController } from '@/useCases/User/CreateUser';
import { refreshTokenController } from '@/useCases/User/RefreshToken';

const router = Router();
router.post('/register', (res, req) => {
  return createUserController.handle(res, req);
});

// TODO: https://jasonwatmore.com/post/2018/11/28/nodejs-role-based-authorization-tutorial-with-example-api Auth role route

router.post('/login', (res, req) => {
  return authUserController.handle(res, req);
});
router.post('/refresh-token', (res, req) => {
  return refreshTokenController.handle(res, req);
});

export { router as authRoutes };
