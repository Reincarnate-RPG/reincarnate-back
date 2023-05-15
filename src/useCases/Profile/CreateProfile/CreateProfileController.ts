import { CreateProfileDTO } from './CreateProfileDTO';
import { CreateProfileUseCase } from './CreateProfileUseCase';
import { Request, Response } from 'express';

export class CreateProfileController {
  constructor(private createProfileUseCase: CreateProfileUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description, userId, role, worldId } =
      req.body as CreateProfileDTO;

    const profile = <CreateProfileDTO>{
      name: name,
      description: description,
      userId: userId,
      worldId: worldId,
      role: role
    };

    try {
      await this.createProfileUseCase.execute(profile);

      return res.status(201).send({ message: 'Profile Created!' });
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || 'Unexpected Error.'
      });
    }
  }
}
