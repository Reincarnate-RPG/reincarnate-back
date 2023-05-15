import { IProfileRepository } from '@/repositories/Profile/IProfileRepository';
import { DeleteProfileDTO } from './DeleteProfileDTO';

export class DeleteProfileUseCase {
  constructor(private profileRepository: IProfileRepository) {}

  async execute({ id }: DeleteProfileDTO) {
    await this.profileRepository.delete(id);
  }
}
