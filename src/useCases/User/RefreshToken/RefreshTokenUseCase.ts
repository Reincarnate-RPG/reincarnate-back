import { IRefreshTokenDTO } from './RefreshTokenDTO';
import { JwtProvider } from '@/providers/Token/Jwt/JwtProvider';
import { RefreshTokenProvider } from '@/providers/Token/RefreshToken/RefreshTokenProvider';

export class RefreshTokenUseCase {
  constructor(
    private refreshTokenProvider: RefreshTokenProvider,
    private jwtProvider: JwtProvider
  ) {}

  async execute({ refreshToken }: IRefreshTokenDTO) {
    const refreshTokenExists = await this.refreshTokenProvider.findToken(
      refreshToken
    );

    if (!refreshTokenExists) {
      throw new Error('Refresh token invalid');
    }

    const refreshTokenExpired = await this.refreshTokenProvider.isExpired(
      refreshTokenExists
    );

    const jwt = await this.jwtProvider.generateToken(refreshTokenExists.userId);

    if (refreshTokenExpired) {
      await this.refreshTokenProvider.removeTokens(refreshTokenExists.userId);

      const newRefreshToken = await this.refreshTokenProvider.generateToken(
        refreshTokenExists.userId
      );

      return { token: jwt, newRefreshToken };
    }

    return { token: jwt };
  }
}
