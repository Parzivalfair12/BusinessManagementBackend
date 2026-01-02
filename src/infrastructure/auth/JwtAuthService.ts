import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { AuthService } from '../../app/ports/AuthService';

export class JwtAuthService implements AuthService {
  generateToken(userId: string): string {
    return jwt.sign(
      { sub: userId },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' }
    );
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}
