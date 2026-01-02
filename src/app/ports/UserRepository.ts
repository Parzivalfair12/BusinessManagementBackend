import { User } from '../../domain/entities/User';

export interface UserRepository {
  findByEmail(email: string): Promise<User | null>;
  create(email: string, passwordHash: string): Promise<User>;
}
