import { CreateProfileDTO } from './../../Profile/CreateProfile/CreateProfileDTO';
import { CreateWorldDTO, CreateWorldRequestDTO } from './CreateWorldDTO';
import { CreateWorldUseCase } from './CreateWorldUseCase';
import { Request, Response } from 'express';

export class CreateWorldController {
  constructor(private createWorldUseCase: CreateWorldUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description, userId, profileName, profileDescription } =
      req.body as CreateWorldRequestDTO;

    const world = <CreateWorldDTO>{
      name: name,
      description: description
    };

    const profile = <CreateProfileDTO>{
      name: profileName,
      role: 'Owner',
      description: profileDescription,
      userId: userId
    };

    try {
      await this.createWorldUseCase.execute(world, profile);

      return res.status(201).send({ message: 'Created World' });
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || 'Unexpected Error.'
      });
    }
  }
}
