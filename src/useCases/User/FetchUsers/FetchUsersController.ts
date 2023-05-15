import { Request, Response } from 'express';
import { FetchUsersUseCase } from './FetchUsersUseCase';

export class FetchUsersController {
  constructor(private fetchUsersUseCase: FetchUsersUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.fetchUsersUseCase.execute();
      return res.status(201).json(users);
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || ' Unexprected Error'
      });
    }
  }
}
