import { BaseDataBase } from "./BaseDataBase";

export class MusicDataBase extends BaseDataBase{
    tableName = 'Musics_Spotenu'

    public async addMusic(id: string, name: string, album_id: string){
        await this.getConnection().insert({id, name, album_id}).into(this.tableName)
    }
}