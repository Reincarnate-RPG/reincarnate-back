import { MongoWorldRepository } from '@/repositories/World/MongoWorldRepository';
import { UpdateWorldUseCase } from './UpdateWorldUseCase';
import { UpdateWorldController } from './UpdateWorldController';

const mongoWorldRepository = new MongoWorldRepository();

const updateWorldUseCase = new UpdateWorldUseCase(mongoWorldRepository);

const updateWorldController = new UpdateWorldController(updateWorldUseCase);

export { updateWorldController };
