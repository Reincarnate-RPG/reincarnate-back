import { sign } from 'jsonwebtoken';
export class JwtProvider {
  async generateToken(userId: string): Promise<string> {
    const secret = process.env.SECRET!;
    const token = sign(
      {
        id: userId,
        isAuthenticated: true
      },
      secret,
      {
        expiresIn: '1h'
      }
    );

    return token;
  }
}
