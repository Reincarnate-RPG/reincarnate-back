import { UserModel } from '@/entities/User/User';
import { IUserRepository } from '@/repositories/User/IUserRepository';

export class FetchUserUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute(id: string): Promise<UserModel> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new Error('No user found.');
    }

    return user;
  }
}
