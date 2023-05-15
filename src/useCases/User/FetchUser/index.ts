import { MongoUserRepository } from '@/repositories/User/MongoUserRepository';
import { FetchUserUseCase } from './FetchUserUseCase';
import { FetchUserController } from './FetchUserController';

const mongoUserRepository = new MongoUserRepository();

const fetchUserUseCase = new FetchUserUseCase(mongoUserRepository);

const fetchUserController = new FetchUserController(fetchUserUseCase);

export { fetchUserUseCase, fetchUserController };
