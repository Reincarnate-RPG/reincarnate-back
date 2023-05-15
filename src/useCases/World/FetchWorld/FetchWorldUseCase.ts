import { IWorldRepository } from '@/repositories/World/IWorldRepository';
import { FetchWorldDTO } from './FetchWorldDTO';
import { WorldModel } from '@/entities/World/World';

export class FetchWorldUseCase {
  constructor(private worldRepository: IWorldRepository) {}

  async execute({ id }: FetchWorldDTO) {
    await this.worldRepository.findById(id);
  }
}
