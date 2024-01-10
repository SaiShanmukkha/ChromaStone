import prisma from "@utils/prismaClient";

export async function POST(request: Request) {
    const posts = await prisma.post.findMany({
      select : {
        id: true,
        title: true,
        tags: true,
        slug: true,
        readTime: true,
        imageURL: true,
        createdAt: true,        
      },
      where : {
        published: true,
      },
      orderBy:{
        createdAt: 'desc' 
      }
    });
    return Response.json({posts: posts})
  }