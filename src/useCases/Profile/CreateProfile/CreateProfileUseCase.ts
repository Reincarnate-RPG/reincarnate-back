import { IProfileRepository } from '@/repositories/Profile/IProfileRepository';
import { CreateProfileDTO } from './CreateProfileDTO';
import { ProfileModel } from '@/entities/Profile/Profile';

export class CreateProfileUseCase {
  constructor(private profileRepository: IProfileRepository) {}

  async execute({
    name,
    description,
    userId,
    worldId,
    role
  }: CreateProfileDTO) {
    const profile = <ProfileModel>{
      name: name,
      description: description,
      role: role,
      userId: userId,
      worldId: worldId
    };

    const profileModel = new ProfileModel(profile);

    await this.profileRepository.save(profileModel);
  }
}
