import { MongoUserRepository } from '@/repositories/User/MongoUserRepository';
import { AuthUserController } from './AuthUserController';
import { AuthUserUseCase } from './AuthUserUseCase';

const mongoUserRepository = new MongoUserRepository();

const authUserUseCase = new AuthUserUseCase(mongoUserRepository);

const authUserController = new AuthUserController(authUserUseCase);

export { authUserUseCase, authUserController };
