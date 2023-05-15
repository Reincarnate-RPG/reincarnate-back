import { createWorldController } from '@/useCases/World/CreateWorld';
import { Router } from 'express';

const router = Router();

router.post('/', (res, req) => {
  return createWorldController.handle(res, req);
});

export { router as worldRoutes };
