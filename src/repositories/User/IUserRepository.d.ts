import { UserModel } from '@/entities/User/User';

export interface IUserRepository {
  findByEmail(email: string): Promise<UserModel?>;
  save(user: UserModel): Promise<void>;
  findById(id: string): Promise<UserModel?>;
  authUser(email: string, password: string): any;
  // TODO: Change any later
  findAll(): Promise<UserModel[]>;
  // TODO: Implements and change methods to be obrigatory
  update?(id: string): Promise<void>;
  delete?(id: string): Promise<void>;
}
