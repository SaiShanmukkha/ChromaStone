import prisma from "@utils/prismaClient";
import { getServerSession } from 'next-auth'
import { authOptions } from '@utils/authOptions'

export async function POST(request: Request) {
    const session = await getServerSession(authOptions);
    if(!session){
        return new Response("", { 
            status: 403,
            statusText: "Please authenticate."
        });
    }

    const postID = await request.text();

    const alreadyMarked = await prisma.bookmark.findFirst({
        where:{
            postId: postID,
            profileId: session.user.profileId
        }
    });

    if(!alreadyMarked){
        await prisma.bookmark.create({
            data: {
                postId: postID,
                profileId: session.user.profileId
            }
        });

        return Response.json({message: "Created Bookmark."}); 
    }else{
        await prisma.bookmark.delete({
            where: {
                id: alreadyMarked.id
            }
        })
        return Response.json({message: "Removed Bookmark."});
    }

  }

