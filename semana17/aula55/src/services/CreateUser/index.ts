import knex from 'knex'
import dotenv from "dotenv";
dotenv.config();

export class CreateUser{
    private connection = knex({
        client: "mysql",
        connection: {
          host: process.env.DB_HOST,
          port: Number(process.env.DB_PORT || "3306"),
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
        },
      })

    private static tableName: string = 'UserList'

    public async searchUser(email:string){
        const result = await this.connection.raw(`
        SELECT * From ${CreateUser.tableName}
        WHERE email = '${email}'
        `)
        return result[0];
    }

    public async createUser(email: string, password: string, id: string, role: string):Promise<void>{
        this.connection.raw(`
        INSERT INTO ${CreateUser.tableName}(email, password, id, role)
        VALUES('${email}','${password}','${id}','${role}');
        `)
    }

    public async searchUserById(id:string){
        const result = await this.connection.raw(`
        SELECT * From ${CreateUser.tableName}
        WHERE id = '${id}'
        `)
        return result[0];
    }

    public async deleteUserId(id:string): Promise<void>{
        await this.connection(CreateUser.tableName).where({id}).delete()
    }
}
