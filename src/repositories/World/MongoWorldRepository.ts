import { WorldModel } from '@/entities/World/World';
import { IWorldRepository } from './IWorldRepository';
import { prisma } from '../../prisma/prisma';
import { ProfileModel } from '@/entities/Profile/Profile';

export class MongoWorldRepository implements IWorldRepository {
  async save(world: WorldModel, profile: ProfileModel): Promise<void> {
    await prisma.world.create({
      data: {
        ...world,
        members: {
          create: {
            role: profile.role,
            name: profile.name,
            description: profile.description,
            user: {
              connect: {
                id: profile.userId
              }
            }
          }
        }
      },
      include: {
        members: {
          include: {
            user: true
          }
        }
      }
    });
  }
  async findAll(): Promise<WorldModel[] | null> {
    const worlds = await prisma.world.findMany();

    return worlds;
  }
  async findById(id: string): Promise<WorldModel | null> {
    const world = await prisma.world.findUnique({
      where: {
        id: id
      }
    });

    return world;
  }
  async delete(id: string): Promise<void> {
    await prisma.world.delete({
      where: {
        id: id
      }
    });
  }
  async update(world: WorldModel): Promise<void> {
    await prisma.world.update({
      where: {
        id: world.id
      },
      data: world
    });
  }
}
