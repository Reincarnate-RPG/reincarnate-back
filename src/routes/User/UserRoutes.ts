import { Router } from 'express';
import { checkToken } from '@/middlewares/CheckToken';
import { fetchUsersController } from '@/useCases/User/FetchUsers';
import { fetchUserController } from '@/useCases/User/FetchUser';

const router = Router();

router.get('/', (res, req) => {
  return fetchUsersController.handle(res, req);
});

//TODO:  Create update user, signout, delete
router.get('/:id', checkToken, async (res, req) => {
  return fetchUserController.handle(res, req);
});

export { router as userRoutes };
