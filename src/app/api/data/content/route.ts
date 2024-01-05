import { S3Client, GetObjectCommand, GetObjectCommandOutput } from "@aws-sdk/client-s3";
import prisma from "@utils/prismaClient";

export async function POST(request: Request): Promise<Response> {
  // const data: string = "s3://chromastone/posts/advanced-react-state-management-and-hooks.md";
  const slugQ: string = await request.text();

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

  console.log(postData);

  const data = postData?.contentURL!;
  const arr: string[] = data.split("/");
  const bucket: string = arr[2];
  const objectPath: string = data.split(bucket + "/")[1];

  const client = new S3Client({
    region: 'us-east-2',
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY || "",
      secretAccessKey: process.env.AWS_SEC_KEY || ""
    }
  });

  const bucketParams = {
    Bucket: bucket,
    Key: objectPath,
  };

  try {
    const command = new GetObjectCommand(bucketParams);
    const response: GetObjectCommandOutput = await client.send(command);

    // Check if response.Body is not undefined
    if (response.Body) {
      const content: string = await response.Body.transformToString();
      return Response.json({
        ...postData,
        content: JSON.stringify(content)
      });
    } else {
      throw new Error('No data received from S3 object');
    }
  } catch (err: any) {
    console.error(err);
    return new Response(JSON.stringify({ "error": "Error Occuured." }), {
      headers: { 'Content-Type': 'application/json' },
      status: 404,
    });
  }
}

