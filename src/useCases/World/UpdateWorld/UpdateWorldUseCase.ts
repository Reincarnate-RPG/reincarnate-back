import { IWorldRepository } from '@/repositories/World/IWorldRepository';
import { WorldModel } from '@/entities/World/World';

export class UpdateWorldUseCase {
  constructor(private worldRepository: IWorldRepository) {}

  async execute(world: WorldModel) {
    await this.worldRepository.update(world);
  }
}
