import { ProfileModel } from '@/entities/Profile/Profile';
import { IProfileRepository } from './IProfileRepository';
import { prisma } from '../../prisma/prisma';

export class MongoProfileRepository implements IProfileRepository {
  async save(profile: ProfileModel): Promise<void> {
    await prisma.profile.create({
      data: {
        user: {
          connect: {
            id: profile.userId
          }
        },
        world: {
          connect: {
            id: profile.worldId
          }
        },
        name: profile.name,
        description: profile.description,
        role: profile.role
      }
    });
  }
  async findAll(): Promise<ProfileModel[]> {
    const profiles = await prisma.profile.findMany({
      include: {
        user: true
      }
    });

    return profiles;
  }
  async findById(id: string): Promise<ProfileModel | null> {
    const profile = await prisma.profile.findUnique({
      where: {
        id: id
      },
      include: {
        user: true
      }
    });

    return profile;
  }
  async delete(id: string): Promise<void> {
    await prisma.profile.delete({
      where: {
        id: id
      }
    });
  }
  async update(profile: ProfileModel): Promise<void> {
    await prisma.profile.update({
      where: {
        id: profile.id
      },
      data: {
        ...profile
      }
    });
  }
}
