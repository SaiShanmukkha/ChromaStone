import { S3Client } from "@aws-sdk/client-s3";

if (!globalThis.s3Client) {

    const credentials = {
      accessKeyId: process.env.AWS_AKEY!,
      secretAccessKey: process.env.AWS_SKEY!
    };

    const client = new S3Client({
        region: 'us-east-2',
        credentials: credentials
      });
      globalThis.s3Client = client;
}

const s3_client: S3Client = globalThis.s3Client;

export default s3_client;
