import { CompanyRepository } from '../../ports/CompanyRepository';

export class ListCompanies {
  constructor(private companyRepo: CompanyRepository) {}

  execute() {
    return this.companyRepo.findAll();
  }
}
