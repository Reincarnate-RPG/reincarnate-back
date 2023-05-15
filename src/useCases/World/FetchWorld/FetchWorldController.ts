import { Request, Response } from 'express';
import { FetchWorldUseCase } from './FetchWorldUseCase';

export class FetchWorldController {
  constructor(private fetchWorldUseCase: FetchWorldUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params as { id: string };
      const world = await this.fetchWorldUseCase.execute({ id });
      return res.status(201).json(world);
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || ' Unexprected Error'
      });
    }
  }
}
