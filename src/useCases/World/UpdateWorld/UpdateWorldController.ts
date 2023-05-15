import { Request, Response } from 'express';
import { UpdateWorldUseCase } from './UpdateWorldUseCase';
import { WorldModel } from '@/entities/World/World';

export class UpdateWorldController {
  constructor(private updateWorldUseCase: UpdateWorldUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body as WorldModel;

    const world = <WorldModel>{
      name: name,
      description: description
    };

    try {
      await this.updateWorldUseCase.execute(world);

      return res.status(201).send();
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || 'Unexpected Error.'
      });
    }
  }
}
