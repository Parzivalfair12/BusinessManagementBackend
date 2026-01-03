import { Schema, model } from 'mongoose';

const CompanySchema = new Schema(
  {
    id: { type: String, required: true },
    businessName: { type: String, required: true },
    nit: { type: String, required: true, unique: true },
    companyType: { type: String, required: true },
    taxRegime: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    currency: { type: String, required: true },
    timezone: { type: String, required: true },
    status: {
      type: String,
      enum: ['ACTIVE', 'SUSPENDED'],
      default: 'ACTIVE'
    }
  },
  { timestamps: true }
);

export const CompanyModel = model('Company', CompanySchema);
