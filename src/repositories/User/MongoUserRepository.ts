import { IUserRepository } from '@/repositories/User/IUserRepository';
import { UserModel } from '@/entities/User/User';
// import { IUsersRepository } from './MongoUserRepository';
import bcrypt from 'bcrypt';
import { RefreshTokenProvider } from '@/providers/Token/RefreshToken/RefreshTokenProvider';
import { JwtProvider } from '@/providers/Token/Jwt/JwtProvider';
import { prisma } from '../../prisma/prisma';

export class MongoUserRepository implements IUserRepository {
  async authUser(email: string, password: string) {
    const user = await this.findByEmail(email);
    if (!user) {
      throw new Error('User or password invalid.');
    }

    const checkPassword = await bcrypt.compare(password, user.password!);

    if (!checkPassword) {
      throw new Error('User or password invalid.');
    }

    const refreshTokenProvider = new RefreshTokenProvider();

    await refreshTokenProvider.removeTokens(user.id);

    const jwtProvider = new JwtProvider();
    const token = await jwtProvider.generateToken(user.id);

    const refreshToken = await refreshTokenProvider.generateToken(user.id);
    return {
      token,
      refreshToken,
      user: { name: user.name, email: user.email }
    };
  }

  // TODO: Review this any
  async findByEmail(email: string): Promise<UserModel | null> {
    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    });

    return user;
  }
  async findById(id: string): Promise<UserModel | null> {
    const user = await prisma.user.findUnique({
      where: {
        id: id
      },
      select: {
        name: true,
        email: true,
        id: true,
        createdAt: true,
        updateddAt: true
      }
    });
    return user;
  }
  // TODO: review this any
  async findAll(): Promise<UserModel[]> {
    const users = await prisma.user.findMany({
      select: {
        name: true,
        email: true,
        id: true,
        createdAt: true,
        updateddAt: true
      }
    });

    return users;
  }

  async save(user: UserModel): Promise<void> {
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(user.password!, salt);

    user.password = passwordHash;

    await prisma.user.create({
      data: { name: user.name, email: user.email, password: user.password }
    });
  }
}
