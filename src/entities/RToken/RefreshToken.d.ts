import mongoose from 'mongoose';
import { IUser } from '../User/User';

export interface IRefreshToken extends mongoose.Document {
  expiresIn: number;
  userId: IUser._id;
}
