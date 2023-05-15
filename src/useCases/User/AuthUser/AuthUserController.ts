import { Request, Response } from 'express';
import { IAuthUserRequestDTO } from './AuthUserDTO';
import { AuthUserUseCase } from './AuthUserUseCase';

export class AuthUserController {
  constructor(private authUserUseCase: AuthUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body as { email: string; password: string };

    const user = <IAuthUserRequestDTO>{
      email: email,
      password: password
    };

    try {
      let jwt;
      await this.authUserUseCase.execute(user).then(token => {
        jwt = token;
      });
      return res.status(201).json(jwt);
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || 'Unexpected Error.'
      });
    }
  }
}
