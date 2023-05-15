import { MongoWorldRepository } from '@/repositories/World/MongoWorldRepository';
import { CreateWorldUseCase } from './CreateWorldUseCase';
import { CreateWorldController } from './CreateWorldController';

const mongoWorldRepository = new MongoWorldRepository();
const createWorldUseCase = new CreateWorldUseCase(mongoWorldRepository);
const createWorldController = new CreateWorldController(createWorldUseCase);

export { createWorldController };
