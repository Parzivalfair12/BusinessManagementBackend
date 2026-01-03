import { Request, Response } from 'express';
import { CompanyRepositoryImpl } from '../../persistence/CompanyRepositoryImpl';
import { CreateCompany } from '../../../app/use-cases/Company/CreateCompany';
import { ListCompanies } from '../../../app/use-cases/Company/ListCompanies';
import { UpdateCompany } from '../../../app/use-cases/Company/UpdateCompany';
import { DeleteCompany } from '../../../app/use-cases/Company/DeleteCompany';

const repo = new CompanyRepositoryImpl();

export class CompanyController {
  static async create(req: Request, res: Response) {
    const useCase = new CreateCompany(repo);
    const company = await useCase.execute(req.body);
    res.status(201).json(company);
  }

  static async list(req: Request, res: Response) {
    const useCase = new ListCompanies(repo);
    const companies = await useCase.execute();
    res.json(companies);
  }

  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const useCase = new UpdateCompany(repo);
    const updated = await useCase.execute(id, req.body);
    res.json(updated);
  }

  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    const useCase = new DeleteCompany(repo);
    await useCase.execute(id);
    res.status(204).send();
  }
}
