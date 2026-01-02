import { UserRepository } from '../ports/UserRepository';
import { AuthService } from '../ports/AuthService';

export class LoginUser {
  constructor(
    private userRepository: UserRepository,
    private authService: AuthService
  ) {}

  async execute(email: string, password: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('Credenciales inválidas');
    }

    const validPassword = await this.authService.comparePassword(
      password,
      user.passwordHash
    );

    if (!validPassword) {
      throw new Error('Credenciales inválidas');
    }

    const token = this.authService.generateToken(user.id);

    return {
      token,
      userId: user.id
    };
  }
}
