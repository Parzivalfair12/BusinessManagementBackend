import { CompanyRepository } from '../../ports/CompanyRepository';

export class UpdateCompany {
  constructor(private companyRepo: CompanyRepository) {}

  async execute(id: string, data: Partial<any>) {
    // basic validation can be added here
    const updated = await this.companyRepo.update(id, data);
    if (!updated) throw new Error('Empresa no encontrada');
    return updated;
  }
}
