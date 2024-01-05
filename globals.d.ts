import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;

  interface tag {
    id : string,
    description?: string,
    name: string,
    fg: string,
    bg: string
  }

  interface postCardParams {
    id:string,
    title: string, 
    slug : string, 
    imageURL:string, 
    createdAt:string, 
    tags: Array<tag>
  }
}


