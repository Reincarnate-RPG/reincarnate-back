import { createProfileController } from '@/useCases/Profile/CreateProfile';
import { Router } from 'express';

const router = Router();

router.post('/', (res, req) => {
  return createProfileController.handle(res, req);
});

export { router as profileRoutes };
