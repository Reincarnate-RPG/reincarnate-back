import {
  RefreshTokenModel,
  IRefreshToken
} from '@/entities/RToken/RefreshToken';

export interface IRefreshTokenProvider {
  generateToken(userId: string): Promise<IRefreshToken>;
  findToken(refreshTokenId: string): Promise<IRefreshToken>;
  isExpired(refreshToken: IRefreshToken): Promise<boolean>;
  removeTokens(userId: string): Promise<void>;
}
