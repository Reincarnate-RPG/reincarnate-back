import { MongoProfileRepository } from '@/repositories/Profile/MongoProfileRepository';
import { UpdateProfileUseCase } from './UpdateProfileUseCase';
import { UpdateProfileController } from './UpdateProfileController';

const mongoProfileRepository = new MongoProfileRepository();

const updateProfileUseCase = new UpdateProfileUseCase(mongoProfileRepository);

const updateProfileController = new UpdateProfileController(
  updateProfileUseCase
);

export { updateProfileController };
