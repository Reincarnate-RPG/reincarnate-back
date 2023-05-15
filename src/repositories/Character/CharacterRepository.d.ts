import { CharacterModel } from '@/entities/Character/Character';

export interface CharacterRepository {
  findById(id: string): Promise<CharacterModel?>;
  findAll(): Promise<CharacterModel[]>;
  save(profile: CharacterModel): Promise<void>;
  update(profile: CharacterModel): Promise<void>;
  delete(id: string): Promise<void>;
}
