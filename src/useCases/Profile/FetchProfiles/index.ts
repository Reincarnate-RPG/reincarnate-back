import { MongoProfileRepository } from '@/repositories/Profile/MongoProfileRepository';
import { FetchProfilesUseCase } from './FetchProfilesUseCase';
import { FetchProfilesController } from './FetchProfilesController';

const mongoProfileRepository = new MongoProfileRepository();

const fetchProfilesUseCase = new FetchProfilesUseCase(mongoProfileRepository);

const fetchProfilesController = new FetchProfilesController(
  fetchProfilesUseCase
);

export { fetchProfilesController };
