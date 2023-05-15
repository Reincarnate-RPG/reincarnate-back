import { MongoWorldRepository } from '@/repositories/World/MongoWorldRepository';
import { FetchWorldUseCase } from './FetchWorldUseCase';
import { FetchWorldController } from './FetchWorldController';

const mongoWorldRepository = new MongoWorldRepository();

const fetchWorldUseCase = new FetchWorldUseCase(mongoWorldRepository);

const fetchWorldController = new FetchWorldController(fetchWorldUseCase);

export { fetchWorldController };
