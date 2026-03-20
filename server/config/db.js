import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log('Log: PostgreSQL conectado via Prisma');
  } catch (error) {
    console.error(`Erro ao conectar ao banco de dados: ${error.message}`);
    process.exit(1);
  }
};

export default prisma;
