import { CompanyRepository } from '../../ports/CompanyRepository';
import { Company } from '../../../domain/entities/Company';

export class CreateCompany {
  constructor(private companyRepo: CompanyRepository) {}

  async execute(data: {
    businessName: string;
    nit: string;
    companyType: string;
    taxRegime: string;
    country: string;
    city: string;
    currency: string;
    timezone: string;
  }) {
    const exists = await this.companyRepo.findByNit(data.nit);
    if (exists) {
      throw new Error('Ya existe una empresa con este NIT');
    }

    const company = new Company(
      crypto.randomUUID(),
      data.businessName,
      data.nit,
      data.companyType,
      data.taxRegime,
      data.country,
      data.city,
      data.currency,
      data.timezone
    );

    return this.companyRepo.create(company);
  }
}
