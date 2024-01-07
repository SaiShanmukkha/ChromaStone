import { S3Client } from '@aws-sdk/client-s3';
import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
  var s3Client : S3Client | undefined;

  interface tag {
    id : string,
    description?: string,
    name: string,
    fg: string,
    bg: string
  }

  interface postCardParams {
    id:string,
    readTime: number,
    title: string, 
    slug : string, 
    imageURL:string, 
    createdAt:string, 
    tags: Array<tag>
  }
}


