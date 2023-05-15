import { WorldModel } from '@/entities/World/World';
import { IWorldRepository } from '@/repositories/World/IWorldRepository';

export class FetchWorldsUseCase {
  constructor(private worldsRepository: IWorldRepository) {}

  async execute(): Promise<WorldModel[]> {
    const worlds = await this.worldsRepository.findAll();

    if (!worlds) {
      throw new Error('No worlds found.');
    }

    return worlds;
  }
}
