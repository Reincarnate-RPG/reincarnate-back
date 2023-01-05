import { sign } from 'jsonwebtoken';
export class JwtProvider {
  async generateToken(userId: string): Promise<string> {
    // TODO: Review this type any
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

// const secret = process.env.SECRET!;
// const token = jwt.sign(
//   {
//     id: user._id
//   },
//   secret,
//   {
//     expiresIn: '30s'
//   }
// );
