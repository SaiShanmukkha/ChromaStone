import prisma from "@utils/prismaClient";

export async function GET() {
  const tags = await prisma.tag.findMany();
  return Response.json({tags: tags});
}