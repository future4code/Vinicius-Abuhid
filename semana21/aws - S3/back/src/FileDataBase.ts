import { AWS, UploadFileInput } from '../services/aws'

export class FileDataBase{
    
    async sendFile(fileInfo:UploadFileInput){
        return await new AWS().uploadFile(fileInfo)
    }
}