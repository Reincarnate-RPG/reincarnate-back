import { CharacterModel } from '@/entities/Character/Character';
import { CharacterRepository } from './CharacterRepository';
import { prisma } from '../../prisma/prisma';

export class MongoProfileRepository implements CharacterRepository {
  async save(character: CharacterModel): Promise<void> {
    await prisma.character.create({
      data: {
        name: character.name,
        title: character.title,
        type: character.type,
        alignment: character.alignment,
        age: character.age,
        gender: character.gender,
        location: character.location,
        race: character.race,
        organization: character.organization,
        family: character.family,
        tag: character.tag,
        personality: character.personality
      }
    });
  }
  async findAll(): Promise<CharacterModel[]> {
    const characters = await prisma.character.findMany();

    return characters;
  }
  async findById(id: string): Promise<CharacterModel | null> {
    const character = await prisma.character.findUnique({
      where: {
        id: id
      }
    });

    return character;
  }
  async delete(id: string): Promise<void> {
    await prisma.character.delete({
      where: {
        id: id
      }
    });
  }
  async update(character: CharacterModel): Promise<void> {
    await prisma.character.update({
      where: {
        id: character.id
      },
      data: {
        ...character
      }
    });
  }
}
