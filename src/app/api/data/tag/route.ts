import prisma from "@utils/prismaClient";

export async function POST(request: Request) {
  const name = await request.text();
  const tagData = await prisma.tag.findUnique({
      where:{
        name: name,
      },
      include:{
        posts: {
          include: {
            tags: {
              select: {
                id: true,
                name: true
              }
            },
          }
        },
      }
    });
  return Response.json({...tagData});
}