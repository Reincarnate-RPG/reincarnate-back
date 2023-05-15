export class CharacterModel {
  public id?: string;
  public name!: string;
  public title!: string;
  public type!: string;
  public alignment!: string;
  public age!: string;
  public gender!: string;
  public location?: string;
  public race?: string;
  public organization?: string;
  public family?: string;
  public tag?: string;
  public personality?: string[];
  public appearance?: string[];
  public attribute?: string[];
  public description?: string;
  public isDead!: boolean;
  public isPrivate!: boolean;
  public userId?: string;
  public worldId?: string;
  constructor(characterModel: CharacterModel) {
    Object.assign(this, characterModel);
  }
}
