import { Request, Response } from 'express';
import { FetchWorldsUseCase } from './FetchWorldsUseCase';

export class FetchWorldsController {
  constructor(private fetchWorldsUseCase: FetchWorldsUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const worlds = await this.fetchWorldsUseCase.execute();
      return res.status(201).json(worlds);
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || ' Unexprected Error'
      });
    }
  }
}
