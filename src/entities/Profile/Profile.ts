export class ProfileModel {
  public id?: string;
  public name!: string;
  public description!: string;
  public role!: string;
  public userId?: string;
  public worldId?: string;
  constructor(profileModel: ProfileModel) {
    Object.assign(this, profileModel);
  }
}
