import {Request, Response} from 'express'
import {FileDataBase} from './FileDataBase'

export class FileController{
    async sendFile(req:Request, res: Response){
        try{
            if (!req.files.file) {
                throw new Error("You must send a file");
              }
            const result = await new FileDataBase().sendFile(req.files.file as any)
            res.status(200).send(result)
        }
        catch (err) {
            console.log(err)
            res.status(400).send({
                message: err.message
            })
        }
    }
}