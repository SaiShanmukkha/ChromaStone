import { PrismaClient } from '@prisma/client';

if (!globalThis.prisma) {
  globalThis.prisma = new PrismaClient();

//   if (process.env.NODE_ENV !== 'production') {
//   }
}

const client: PrismaClient = globalThis.prisma;
export default client;
