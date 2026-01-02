import { Request, Response } from 'express';
import { LoginUser } from '../../../app/use-cases/LoginUser';

export class AuthController {
  constructor(private loginUser: LoginUser) {}

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const result = await this.loginUser.execute(email, password);

      res.json(result);
    } catch (error) {
      res.status(401).json({ message: 'Credenciales inválidas' });
    }
  };
}
