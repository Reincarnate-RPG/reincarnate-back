import { ICreateUserRequestDTO } from './CreateUserDTO';
import { IUsersRepository } from '@/repositories/User/IUsersRepository';
import { UserModel } from '@/entities/User/User';
import { IMailProvider } from '@/providers/Mail/IMailProvider';
import { IUser } from '@/entities/User/User.d';

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}
  async execute({ name, email, password }: ICreateUserRequestDTO) {
    const userExists = await this.usersRepository.findByEmail(email);

    if (userExists) {
      throw new Error('User alredy exists.');
    }

    const user = <IUser>{
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
