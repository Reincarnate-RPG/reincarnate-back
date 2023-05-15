import { Request, Response } from 'express';
import { FetchProfileUseCase } from './FetchProfileUseCase';

export class FetchProfileController {
  constructor(private fetchProfileUseCase: FetchProfileUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params as { id: string };
      const profile = await this.fetchProfileUseCase.execute({ id });
      return res.status(201).json(profile);
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || ' Unexprected Error'
      });
    }
  }
}
