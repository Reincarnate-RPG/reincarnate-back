export interface IJwtProvider {
  generateToken(userId: string): Promise<string>;
}
