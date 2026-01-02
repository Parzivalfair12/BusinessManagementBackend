export interface AuthService {
  generateToken(userId: string): string;
  comparePassword(password: string, hash: string): Promise<boolean>;
}
