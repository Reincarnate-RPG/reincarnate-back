import { Request, Response } from 'express';
import { UpdateProfileUseCase } from './UpdateProfileUseCase';
import { ProfileModel } from '@/entities/Profile/Profile';

export class UpdateProfileController {
  constructor(private updateProfileUseCase: UpdateProfileUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body as ProfileModel;

    const profile = <ProfileModel>{
      name: name,
      description: description
    };

    try {
      await this.updateProfileUseCase.execute(profile);

      return res.status(201).send();
    } catch (err: any) {
      console.log(err);
      return res.status(400).json({
        message: err.message || 'Unexpected Error.'
      });
    }
  }
}
