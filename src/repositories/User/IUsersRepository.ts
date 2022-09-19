import { UserModel } from '@/entities/User/User';
import { Schema } from 'mongoose';

export interface IUsersRepository {
  findByEmail(email: string): Promise<UserModel>;
  save(user: UserModel): Promise<void>;
  findById(id: Schema.Types.ObjectId): Promise<UserModel>;
  authUser(email: string, password: string): any;
  // TODO: Change any later
  findAll(id: Schema.Types.ObjectId): Promise<UserModel[]>;
  // TODO: Implements and change methods to be obrigatory
  update?(id: Schema.Types.ObjectId): Promise<void>;
  delete?(id: Schema.Types.ObjectId): Promise<void>;
}
