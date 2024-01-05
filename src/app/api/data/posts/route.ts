import prisma from "@utils/prismaClient";

export async function POST(request: Request) {
    const posts = await prisma.post.findMany({
      take: 15,
      select : {
        id: true,
        title: true,
        tags: true,
        slug: true,
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