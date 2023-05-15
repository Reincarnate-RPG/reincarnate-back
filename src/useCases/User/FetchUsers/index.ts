import { MongoUserRepository } from '@/repositories/User/MongoUserRepository';
import { FetchUsersUseCase } from './FetchUsersUseCase';
import { FetchUsersController } from './FetchUsersController';

const mongoUserRepository = new MongoUserRepository();

const fetchUsersUseCase = new FetchUsersUseCase(mongoUserRepository);

const fetchUsersController = new FetchUsersController(fetchUsersUseCase);

export { fetchUsersUseCase, fetchUsersController };
