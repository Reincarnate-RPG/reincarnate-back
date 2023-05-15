export class WorldModel {
  public id!: string;
  public name!: string;
  public description!: string | null;
  constructor(worldModel: WorldModel) {
    Object.assign(this, worldModel);
  }
}
