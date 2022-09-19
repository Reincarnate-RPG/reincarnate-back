import { IUsersRepository } from '@/repositories/User/IUsersRepository';
import { IAuthUserRequestDTO } from './AuthUserDTO';

export class AuthUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}
  async execute({ email, password }: IAuthUserRequestDTO): Promise<string> {
    return await this.usersRepository
      .authUser(email, password)
      .then((token: any) => {
        // TODO: Resolve this type any
        return token;
      });
  }
}
