import { CreateUserRequestDTO } from './CreateUserDTO';
import { IUserRepository } from '@/repositories/User/IUserRepository';
import { UserModel } from '@/entities/User/User';
import { IMailProvider } from '@/providers/Mail/IMailProvider';

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUserRepository,
    private mailProvider: IMailProvider
  ) {}
  async execute({ name, email, password }: CreateUserRequestDTO) {
    const userExists = await this.usersRepository.findByEmail(email);

    if (userExists) {
      throw new Error('User alredy exists.');
    }

    const user = <UserModel>{
      name: name,
      email: email,
      password: password
    };

    const userModel = new UserModel(user);

    await this.usersRepository.save(userModel);

    await this.mailProvider.sendMail({
      to: {
        name: name,
        email: email
      },
      from: {
        name: 'Reincarnate Team',
        email: 'contact@reincarnate.com'
      },
      subject: 'Seja bem-vindo à plataforma',
      body: '<p>Você já pode fazer o login em nossa plataforma.</p>'
    });
  }
}
