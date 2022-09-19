import { MailtrapMailProvider } from '@/providers/Mail/MailtrapMailProvider';
import { MongoUsersRepository } from '@/repositories/User/MongoUsersRepository';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const mailtrapMailProvider = new MailtrapMailProvider();
const mongoUsersRepository = new MongoUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  mongoUsersRepository,
  mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { CreateUserUseCase, createUserController };
