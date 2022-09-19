import { IRefreshTokenProvider } from './RefreshTokenProvider.d';
import { IRefreshToken } from '@/entities/RToken/RefreshToken.d';
import {
  RefreshToken,
  RefreshTokenModel
} from '@/entities/RToken/RefreshToken';
import dayjs from 'dayjs';

export class RefreshTokenProvider implements IRefreshTokenProvider {
  async generateToken(userId: string): Promise<IRefreshToken> {
    const expiresIn = dayjs().add(15, 'second').unix();
    const refreshToken = <IRefreshToken>{
      userId: userId,
      expiresIn: expiresIn
    };
    const generateRefreshToken = await RefreshToken.create(refreshToken);
    return generateRefreshToken!;
  }

  async findToken(refreshTokenId: string): Promise<IRefreshToken> {
    const token = await RefreshToken.findById(refreshTokenId);

    return token!;
  }

  async isExpired(refreshToken: IRefreshToken): Promise<boolean> {
    const refreshTokenExpired = dayjs().isAfter(
      dayjs.unix(refreshToken.expiresIn)
    );

    return refreshTokenExpired;
  }

  async removeTokens(userId: string): Promise<void> {
    await RefreshToken.deleteMany({ userId: userId });
  }
}
