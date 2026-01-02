import express from 'express';
import authRoutes from './infrastructure/http/routes/auth.routes';
import cors from 'cors';

export const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());
app.use('/auth', authRoutes);
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando correctamente!');
});