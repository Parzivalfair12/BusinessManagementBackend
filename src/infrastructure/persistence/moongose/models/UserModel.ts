import { Schema, model, Document } from 'mongoose';

export interface UserDocument extends Document {
  email: string;
  passwordHash: string;
}

const UserSchema = new Schema<UserDocument>(
  {
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true }
  },
  { timestamps: true }
);

export const UserModel = model<UserDocument>('User', UserSchema);
