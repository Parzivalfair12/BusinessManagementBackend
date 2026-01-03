import { Router } from 'express';
import { CompanyController } from '../controllers/CompanyController';
import { authGuard } from '../../auth/authGuard';
const router = Router();

router.use(authGuard);

router.post('/', CompanyController.create);
router.get('/', CompanyController.list);
router.put('/:id', CompanyController.update);
router.delete('/:id', CompanyController.delete);

export default router;
