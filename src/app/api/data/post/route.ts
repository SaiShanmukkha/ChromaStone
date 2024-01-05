import prisma from "@utils/prismaClient";
import { NextApiRequest } from "next";

export async function POST(req: Request) : Promise<Response> {
//   const slugQ: string = "s3://chromastone/posts/advanced-react-state-management-and-hooks.md";
  const slugQ: string = await req.text();

  console.log("SlugQ\n\n", slugQ);

  const postData = await prisma.post.findUnique({
        select : {
            id: true,
            title: true,
            contentURL: true,
            tags: true,
            slug: true,
            imageURL: true,
            createdAt: true,        
        },
        where : {
            slug: slugQ
        },
    });

    if(!postData){
        return new Response('', {
            status: 404,
            statusText: "Not Found"
        });
    }
  
    return Response.json(postData);
}


