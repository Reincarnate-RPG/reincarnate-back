import { IProfileRepository } from '@/repositories/Profile/IProfileRepository';
import { ProfileModel } from '@/entities/Profile/Profile';

export class UpdateProfileUseCase {
  constructor(private profileRepository: IProfileRepository) {}

  async execute(profile: ProfileModel) {
    await this.profileRepository.update(profile);
  }
}
