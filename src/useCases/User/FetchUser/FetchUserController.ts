import { Request, Response } from 'express';
import { FetchUserUseCase } from './FetchUserUseCase';

export class FetchUserController {
  constructor(private fetchUserUseCase: FetchUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params as { id: string };
      const user = await this.fetchUserUseCase.execute(id);
      return res.status(201).json(user);
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || ' Unexprected Error'
      });
    }
  }
}
