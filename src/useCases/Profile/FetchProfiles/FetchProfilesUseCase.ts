import { ProfileModel } from '@/entities/Profile/Profile';
import { IProfileRepository } from '@/repositories/Profile/IProfileRepository';

export class FetchProfilesUseCase {
  constructor(private profilesRepository: IProfileRepository) {}

  async execute(): Promise<ProfileModel[]> {
    const profiles = await this.profilesRepository.findAll();

    if (!profiles) {
      throw new Error('No profiles found.');
    }

    return profiles;
  }
}
