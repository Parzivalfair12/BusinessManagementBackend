import { UserRepository } from '../ports/UserRepository';
import bcrypt from 'bcrypt';

export class BootstrapAdminUser {
  constructor(private userRepo: UserRepository) {}

  async execute() {
    const adminEmail = process.env.ADMIN_EMAIL!;
    const adminPassword = process.env.ADMIN_PASSWORD!;

    if (!adminEmail || !adminPassword) {
      throw new Error('ADMIN_EMAIL o ADMIN_PASSWORD no configurados');
    }

    const existing = await this.userRepo.findByEmail(adminEmail);

    if (existing) {
      console.log('👤 Usuario administrador ya existe');
      return;
    }

    const passwordHash = await bcrypt.hash(adminPassword, 10);

    await this.userRepo.create(adminEmail, passwordHash);

    console.log('🚀 Usuario administrador creado');
  }
}
