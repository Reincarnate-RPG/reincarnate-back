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
  const users = await User.find().select('-password');

  if (!users) {
    return res.status(422).json({ message: 'Nenhum usuário encontrado!' });
  }

  try {
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

router.get('/user/:id', checkToken, async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await User.findById(id, ['-password', '-_id']);

  console.log(user);

  if (!user) {
    return res.status(422).json({ message: 'O usuário não foi encontrado!' });
  }
  try {
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

export { router as userRoutes };
