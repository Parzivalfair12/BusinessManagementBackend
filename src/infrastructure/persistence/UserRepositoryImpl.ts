import { UserRepository } from '../../app/ports/UserRepository';
import { User } from '../../domain/entities/User';
import { UserModel } from './moongose/models/UserModel';

export class UserRepositoryImpl implements UserRepository {

  async findByEmail(email: string): Promise<User | null> {
    const userDoc = await UserModel.findOne({ email }).exec();

    if (!userDoc) return null;

    return new User(
      userDoc.id,
      userDoc.email,
      userDoc.passwordHash
    );
  }

  async create(email: string, passwordHash: string): Promise<User> {
    const doc = await UserModel.create({ email, passwordHash });
    return new User(doc.id, doc.email, doc.passwordHash);
  }
}
