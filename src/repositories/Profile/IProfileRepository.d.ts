import { ProfileModel } from '@/entities/Profile/Profile';

export interface IProfileRepository {
  findById(id: string): Promise<ProfileModel?>;
  findAll(): Promise<ProfileModel[]>;
  save(profile: ProfileModel): Promise<void>;
  update(profile: ProfileModel): Promise<void>;
  delete(id: string): Promise<void>;
}
