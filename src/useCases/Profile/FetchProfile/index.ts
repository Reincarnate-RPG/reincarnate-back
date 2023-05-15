import { MongoProfileRepository } from '@/repositories/Profile/MongoProfileRepository';
import { FetchProfileUseCase } from './FetchProfileUseCase';
import { FetchProfileController } from './FetchProfileController';

const mongoProfileRepository = new MongoProfileRepository();

const fetchProfileUseCase = new FetchProfileUseCase(mongoProfileRepository);

const fetchProfileController = new FetchProfileController(fetchProfileUseCase);

export { fetchProfileController };
