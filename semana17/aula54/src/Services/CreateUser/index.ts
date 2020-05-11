import {connection} from '../../index'

export class CreateUser{
    
    private static tableName: string

    public async createUser(email: string, password: string, id: string){
        connection.raw(`
        INSERT INTO UserList(email, password, id)
        VALUES('${email}','${password}','${id}');
        `)
    }
}

