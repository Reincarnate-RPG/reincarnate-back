import { IProfileRepository } from '@/repositories/Profile/IProfileRepository';
import { FetchProfileDTO } from './FetchProfileDTO';
import { ProfileModel } from '@/entities/Profile/Profile';

export class FetchProfileUseCase {
  constructor(private profileRepository: IProfileRepository) {}

  async execute({ id }: FetchProfileDTO) {
    await this.profileRepository.findById(id);
  }
}
