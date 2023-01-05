import { IUser } from '@/entities/User/User.d';
import { User, UserModel } from '@/entities/User/User';
import { IUsersRepository } from './IUsersRepository';
import { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import { RefreshTokenProvider } from '@/providers/Token/RefreshToken/RefreshTokenProvider';
import { JwtProvider } from '@/providers/Token/Jwt/JwtProvider';
import { RefreshToken } from '@/entities/RToken/RefreshToken';

export class MongoUsersRepository implements IUsersRepository {
  async authUser(email: string, password: string) {
    const user = await this.findByEmail(email);

    if (!user) {
      throw new Error('User or password invalid.');
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      throw new Error('User or password invalid.');
    }

    await RefreshToken.deleteMany({ userId: user._id });

    const generateJwt = new JwtProvider();
    const token = await generateJwt.generateToken(user._id);

    const generateRefreshToken = new RefreshTokenProvider();
    const refreshToken = await generateRefreshToken.generateToken(user._id);
    return {
      token,
      refreshToken,
      user: { name: user.name, email: user.email }
    };
  }

  async findByEmail(email: string): Promise<IUser> {
    const user = await User.findOne({ email: email });

    return user!;
  }
  async findById(id: Schema.Types.ObjectId): Promise<UserModel> {
    const user = await User.findById(id);

    return user!;
  }

  async findAll(): Promise<UserModel[]> {
    const users = await User.find().select('-password');

    return users;
  }

  async save(user: UserModel): Promise<void> {
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(user.password, salt);

    user.password = passwordHash;

    await User.create(user);
  }
}
