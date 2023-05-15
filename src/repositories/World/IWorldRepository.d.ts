import { ProfileModel } from '@/entities/Profile/Profile';
import { WorldModel } from '@/entities/World/World';

export interface IWorldRepository {
  findById(id: string): Promise<WorldModel?>;
  findAll(): Promise<WorldModel[]?>;
  save(world: WorldModel, profile: ProfileModel): Promise<void>;
  update(world: WorldModel): Promise<void>;
  delete(id: string): Promise<void>;
}
