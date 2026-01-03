import { CompanyRepository } from '../../app/ports/CompanyRepository';
import { Company } from '../../domain/entities/Company';
import { CompanyModel } from './moongose/models/CompanyModel';

export class CompanyRepositoryImpl implements CompanyRepository {
  async create(company: Company): Promise<Company> {
    await CompanyModel.create(company);
    return company;
  }

  async findAll(): Promise<Company[]> {
    return CompanyModel.find().lean();
  }

  async findByNit(nit: string): Promise<Company | null> {
    return CompanyModel.findOne({ nit }).lean();
  }

  async updateStatus(
    id: string,
    status: 'ACTIVE' | 'SUSPENDED'
  ): Promise<Company | null> {
    return CompanyModel.findOneAndUpdate(
      { id },
      { status },
      { new: true }
    ).lean();
  }

  async update(id: string, data: Partial<Company>): Promise<Company | null> {
    return CompanyModel.findOneAndUpdate({ id }, { $set: data }, { new: true }).lean();
  }

  async delete(id: string): Promise<void> {
    await CompanyModel.findOneAndDelete({ id });
  }
}
