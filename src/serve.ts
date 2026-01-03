import express from 'express';
import authRoutes from './infrastructure/http/routes/auth.routes';
import companyRoutes from './infrastructure/http/routes/company.routes';
import cors from 'cors';

export const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/company', companyRoutes);
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando correctamente!');
});