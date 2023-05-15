import { RefreshTokenModel } from '@/entities/RToken/RefreshToken';

export interface IRefreshTokenProvider {
  generateToken(userId: string): Promise<RefreshTokenModel>;
  findToken(refreshTokenId: string): Promise<RefreshTokenModel>;
  isExpired(refreshToken: RefreshTokenModel): Promise<boolean>;
  removeTokens(userId: string): Promise<void>;
}
