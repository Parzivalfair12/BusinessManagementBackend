export type CompanyStatus = 'ACTIVE' | 'SUSPENDED';

export class Company {
  constructor(
    public readonly id: string,
    public businessName: string,
    public nit: string,
    public companyType: string,
    public taxRegime: string,
    public country: string,
    public city: string,
    public currency: string,
    public timezone: string,
    public status: CompanyStatus = 'ACTIVE'
  ) {}
}
