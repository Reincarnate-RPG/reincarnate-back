import { IRefreshTokenDTO } from './RefreshTokenDTO';
import { RefreshTokenUseCase } from './RefreshTokenUseCase';
import { Request, Response } from 'express';

export class RefreshTokenController {
  constructor(private refreshTokenUseCase: RefreshTokenUseCase) {}

  async handle(req: Request, res: Response) {
    const { refresh_token } = req.body;

    const refreshToken = <IRefreshTokenDTO>{
      refreshToken: refresh_token
    };

    try {
      let jwt;

      await this.refreshTokenUseCase.execute(refreshToken).then(token => {
        jwt = token;
      });

      return res.status(201).json({ jwt });
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || 'Unexpected Error.'
      });
    }
  }
}
