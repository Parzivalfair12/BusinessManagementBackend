import { Company } from '../../domain/entities/Company';

export interface CompanyRepository {
  create(company: Company): Promise<Company>;
  findAll(): Promise<Company[]>;
  findByNit(nit: string): Promise<Company | null>;
  updateStatus(
    id: string,
    status: 'ACTIVE' | 'SUSPENDED'
  ): Promise<Company | null>;
  update(id: string, data: Partial<Company>): Promise<Company | null>;
  delete(id: string): Promise<void>;
}
