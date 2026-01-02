import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';
import { LoginUser } from '../../../app/use-cases/LoginUser';
import { UserRepositoryImpl } from '../../persistence/UserRepositoryImpl';
import { JwtAuthService } from '../../auth/JwtAuthService';

const router = Router();

const userRepo = new UserRepositoryImpl();
const authService = new JwtAuthService();
const loginUser = new LoginUser(userRepo, authService);
const authController = new AuthController(loginUser);

router.post('/login', authController.login);

export default router;
