import { S3 } from "aws-sdk"

export class AWS {
    s3 = new S3({
        accessKeyId: process.env.AWS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
    })

    public async uploadFile(input: UploadFileInput): Promise<UploadFileOutput> {
        const result = await this.s3
            .upload({
                Bucket: "bucket-sagan",
                Key: input.name,
                Body: input.file,
            })
            .promise();

        return {
            link: result.Location,
        };
    }
}
export interface UploadFileInput {
    name: string;
    file: any;
}

interface UploadFileOutput {
    link: string;
}

