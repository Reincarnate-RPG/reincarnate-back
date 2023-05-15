import { MailtrapMailProvider } from '@/providers/Mail/MailtrapMailProvider';
import { MongoUserRepository } from '@/repositories/User/MongoUserRepository';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const mailtrapMailProvider = new MailtrapMailProvider();
const mongoUserRepository = new MongoUserRepository();

const createUserUseCase = new CreateUserUseCase(
  mongoUserRepository,
  mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
