import { MongoProfileRepository } from '@/repositories/Profile/MongoProfileRepository';
import { DeleteProfileUseCase } from './DeleteProfileUseCase';
import { DeleteProfileController } from './DeleteProfileController';

const mongodeleteProfileRepository = new MongoProfileRepository();

const deleteProfileUseCase = new DeleteProfileUseCase(
  mongodeleteProfileRepository
);

const deleteProfileController = new DeleteProfileController(
  deleteProfileUseCase
);

export { deleteProfileController };
