import express from 'express';
import authRoutes from './infrastructure/http/routes/auth.routes';

export const app = express();

app.use(express.json());
app.use('/auth', authRoutes);
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando correctamente!');
});