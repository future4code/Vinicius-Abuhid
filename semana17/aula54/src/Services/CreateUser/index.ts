import {connection} from '../../index'

export class CreateUser{
    
    private static tableName: string = 'UserList'

    public async searchUser(email:string){
        const result = await connection.raw(`
        SELECT * From ${CreateUser.tableName}
        WHERE email = '${email}'
        `)
        return result[0];
    }

    public async createUser(email: string, password: string, id: string):Promise<void>{
        connection.raw(`
        INSERT INTO ${CreateUser.tableName}(email, password, id)
        VALUES('${email}','${password}','${id}');
        `)
    }
    
    public async searchUserById(id:string){
        const result = await connection.raw(`
        SELECT * From ${CreateUser.tableName}
        WHERE id = '${id}'
        `)
        return result[0];
    }
}

