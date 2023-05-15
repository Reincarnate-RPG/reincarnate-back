import { MongoWorldRepository } from '@/repositories/World/MongoWorldRepository';
import { FetchWorldsUseCase } from './FetchWorldsUseCase';
import { FetchWorldsController } from './FetchWorldsController';

const mongoWorldRepository = new MongoWorldRepository();

const fetchWorldsUseCase = new FetchWorldsUseCase(mongoWorldRepository);

const fetchWorldsController = new FetchWorldsController(fetchWorldsUseCase);

export { fetchWorldsController };
