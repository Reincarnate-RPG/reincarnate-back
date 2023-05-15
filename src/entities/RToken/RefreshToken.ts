export class RefreshTokenModel {
  public id!: string;
  public userId!: string;
  public expiresIn!: Number;

  constructor(refreshTokenModel: RefreshTokenModel) {
    Object.assign(this, refreshTokenModel);
  }
}
