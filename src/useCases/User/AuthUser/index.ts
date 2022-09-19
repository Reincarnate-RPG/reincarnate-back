import { MongoUsersRepository } from '@/repositories/User/MongoUsersRepository';
import { AuthUserController } from './AuthUserController';
import { AuthUserUseCase } from './AuthUserUseCase';

const mongoUsersRepository = new MongoUsersRepository();

const authUserUseCase = new AuthUserUseCase(mongoUsersRepository);

const authUserController = new AuthUserController(authUserUseCase);

export { authUserUseCase, authUserController };
