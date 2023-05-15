import { CreateProfileDTO } from './../../Profile/CreateProfile/CreateProfileDTO';
import { IWorldRepository } from '@/repositories/World/IWorldRepository';
import { CreateWorldDTO } from './CreateWorldDTO';
import { WorldModel } from '@/entities/World/World';
import { ProfileModel } from '@/entities/Profile/Profile';

export class CreateWorldUseCase {
  constructor(private worldRepository: IWorldRepository) {}

  async execute(world: CreateWorldDTO, profile: CreateProfileDTO) {
    const worldDTO = <WorldModel>{
      name: world.name,
      description: world.description
    };

    const profileDTO = <ProfileModel>{
      name: profile.name,
      description: profile.description,
      role: profile.role,
      userId: profile.userId
    };

    const worldModel = new WorldModel(worldDTO);
    const profileModel = new ProfileModel(profileDTO);

    await this.worldRepository.save(worldModel, profileModel);
  }
}
