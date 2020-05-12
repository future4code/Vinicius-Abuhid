import knex from 'knex'
import dotenv from "dotenv";
import { BaseDataBase } from '../BaseDataBase';
dotenv.config();

export class CreateUser extends BaseDataBase {

    private static tableName: string = 'UserList'

    public async searchUser(email: string) {
        const result = await this.getConnection().raw(`
        SELECT * From ${CreateUser.tableName}
        WHERE email = '${email}'
        `)
        return result[0];
    }

    public async createUser(email: string, password: string, id: string, role: string): Promise<void> {
        this.getConnection().raw(`
        INSERT INTO ${CreateUser.tableName}(email, password, id, role)
        VALUES('${email}','${password}','${id}','${role}');
        `)
    }

    public async searchUserById(id: string) {
        const result = await this.getConnection().raw(`
        SELECT * From ${CreateUser.tableName}
        WHERE id = '${id}'
        `)
        return result[0];
    }

    public async deleteUserId(id: string): Promise<void> {
        await this.getConnection()(CreateUser.tableName).where({ id }).delete()
    }
}
