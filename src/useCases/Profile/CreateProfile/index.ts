import { MongoProfileRepository } from '@/repositories/Profile/MongoProfileRepository';
import { CreateProfileUseCase } from './CreateProfileUseCase';
import { CreateProfileController } from './CreateProfileController';

const mongoProfileRepository = new MongoProfileRepository();

const createProfileUseCase = new CreateProfileUseCase(mongoProfileRepository);

const createProfileController = new CreateProfileController(
  createProfileUseCase
);

export { createProfileController };
