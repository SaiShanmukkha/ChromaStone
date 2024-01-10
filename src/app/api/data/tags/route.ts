import prisma from "@utils/prismaClient";

export async function GET() {
  const tags = await prisma.tag.findMany({
    select: {
      id: true,
      name: true,
      fg: true,
      bg: true,
    }
  });
  return Response.json({tags: tags});
}