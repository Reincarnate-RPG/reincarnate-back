import { JwtProvider } from '@/providers/Token/Jwt/JwtProvider';
import { RefreshTokenProvider } from '@/providers/Token/RefreshToken/RefreshTokenProvider';
import { RefreshTokenController } from './RefreshTokenController';
import { RefreshTokenUseCase } from './RefreshTokenUseCase';

const jwtProvider = new JwtProvider();
const refreshTokenProvider = new RefreshTokenProvider();

const refreshTokenUseCase = new RefreshTokenUseCase(
  refreshTokenProvider,
  jwtProvider
);

const refreshTokenController = new RefreshTokenController(refreshTokenUseCase);

export { refreshTokenUseCase, refreshTokenController };
