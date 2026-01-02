import 'dotenv/config';
import { app } from './serve';
import { connectMongo } from './infrastructure/persistence/moongose/connection';
import { UserRepositoryImpl } from './infrastructure/persistence/UserRepositoryImpl';
import { BootstrapAdminUser } from './app/use-cases/BootstrapAdminUser';

const PORT = process.env.PORT || 3000;

const start = async () => {
  await connectMongo();

  const userRepo = new UserRepositoryImpl();
  const bootstrapAdmin = new BootstrapAdminUser(userRepo);

  await bootstrapAdmin.execute();

  app.listen(PORT, () => {
    console.log(`🚀 Server corriendo en puerto ${PORT}`);
  });
};

start();

