import { IRefreshTokenProvider } from './RefreshTokenProvider.d';
import dayjs from 'dayjs';

import { prisma } from '../../../prisma/prisma';
import { RefreshToken } from '@prisma/client';

export class RefreshTokenProvider implements IRefreshTokenProvider {
  async generateToken(userId: string): Promise<RefreshToken> {
    const expiresIn = dayjs().add(300, 'second').unix();

    console.log('~~');
    console.log(userId);
    console.log(expiresIn);

    const generateRefreshToken = await prisma.refreshToken.create({
      data: { expiresIn: expiresIn, userId: userId }
    });
    return generateRefreshToken!;
  }

  async findToken(refreshTokenId: string): Promise<RefreshToken> {
    const token = await prisma.refreshToken.findUnique({
      where: {
        id: refreshTokenId
      }
    });

    return token!;
  }

  async isExpired(refreshToken: RefreshToken): Promise<boolean> {
    const refreshTokenExpired = dayjs().isAfter(
      dayjs.unix(refreshToken.expiresIn)
    );

    return refreshTokenExpired;
  }

  async removeTokens(userId: string): Promise<void> {
    await prisma.refreshToken.deleteMany({
      where: {
        userId: userId
      }
    });
  }
}
