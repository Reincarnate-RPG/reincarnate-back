import { IUser } from './User.d';
import { model, Schema } from 'mongoose';

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

export class UserModel {
  public name!: string;
  public email!: string;
  public password!: string;

  constructor(userModel: IUser) {
    Object.assign(this, userModel);
  }
}

export const User = model<IUser>('User', userSchema);
