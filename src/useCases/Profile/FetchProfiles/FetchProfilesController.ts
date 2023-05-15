import { Request, Response } from 'express';
import { FetchProfilesUseCase } from './FetchProfilesUseCase';

export class FetchProfilesController {
  constructor(private fetchProfilesUseCase: FetchProfilesUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const profiles = await this.fetchProfilesUseCase.execute();
      return res.status(201).json(profiles);
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || ' Unexprected Error'
      });
    }
  }
}
