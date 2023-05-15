import { UserModel } from '@/entities/User/User';
import { IUserRepository } from '@/repositories/User/IUserRepository';

export class FetchUsersUseCase {
  constructor(private usersRepository: IUserRepository) {}

  async execute(): Promise<UserModel[]> {
    const users = await this.usersRepository.findAll();

    if (!users) {
      throw new Error('No users found.');
    }

    return users;
  }
}
