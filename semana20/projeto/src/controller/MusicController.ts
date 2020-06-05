import { MusicBusiness } from "../business/MusicBusiness";
import { MusicDataBase } from "../data/MusicDataBase";
import { IdGenerator } from "../services/IdGenerator";
import { AlbumDataBase } from "../data/AlbumDataBase";
import { Request, Response } from 'express'
import { BaseDataBase } from "../data/BaseDataBase";

export class MusicController{
    private static musicBusiness = new MusicBusiness(new MusicDataBase, new IdGenerator, new AlbumDataBase)
    
    public async addMusic(req: Request, res: Response){
        try{
            const result = await MusicController.musicBusiness.addMusic(req.body.name, req.body.album.trim())
            res.status(200).send({
                message: result
            })
        }
        catch (err) {
            res.status(err.errorCode || 400).send({
                message: err.message
            })
        }
        finally {
            BaseDataBase.destroy()
        }
    }
}