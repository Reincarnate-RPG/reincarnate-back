import { IWorldRepository } from '@/repositories/World/IWorldRepository';
import { DeleteWorldDTO } from './DeleteWorldDTO';

export class DeleteWorldUseCase {
  constructor(private worldRepository: IWorldRepository) {}

  async execute({ id }: DeleteWorldDTO) {
    await this.worldRepository.delete(id);
  }
}
