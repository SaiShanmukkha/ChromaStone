import { GetObjectCommand, GetObjectCommandOutput } from "@aws-sdk/client-s3";
import s3_client from "@utils/s3Client";

export async function POST(request: Request): Promise<Response> {
  const data: string = await request.text();

  const arr: string[] = data.split("/");
  const bucket: string = arr[2];
  const buckArr = data.split(bucket + "/");
  const objectPath: string = buckArr[1];

  const bucketParams = {
    Bucket: bucket,
    Key: objectPath,
  };
  

  try {
    const command = new GetObjectCommand(bucketParams);
    const response: GetObjectCommandOutput = await s3_client.send(command);

    if (response.Body) {
      const content: string = await response.Body.transformToString();
      return new Response(content);
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

