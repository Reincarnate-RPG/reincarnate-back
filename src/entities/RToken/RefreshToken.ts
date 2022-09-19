import { IRefreshToken } from './RefreshToken.d';
import { model, Schema } from 'mongoose';

const refreshTokenSchema = new Schema<IRefreshToken>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  expiresIn: { type: Number, required: true }
});

export class RefreshTokenModel {
  public name!: string;
  public email!: string;
  public password!: string;

  constructor(refreshTokenModel: IRefreshToken) {
    Object.assign(this, refreshTokenModel);
  }
}

export const RefreshToken = model<IRefreshToken>(
  'RefreshToken',
  refreshTokenSchema
);
