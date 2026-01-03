import { CompanyRepository } from '../../ports/CompanyRepository';

export class DeleteCompany {
  constructor(private companyRepo: CompanyRepository) {}

  async execute(id: string) {
    // could add checks (e.g., don't delete main company)
    await this.companyRepo.delete(id);
    return { success: true };
  }
}
