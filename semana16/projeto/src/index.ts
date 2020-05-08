import knex from 'knex'
import dotenv from 'dotenv'
dotenv.config()
import moment from 'moment';
import 'moment/locale/pt-br';
import express, { Request, Response } from "express";
import { AddressInfo } from "net";

const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME
    }
})

// Querry Builders
async function createUser(name: string, nickname: string, email: string): Promise<any> {
    const id = (new Date).getTime()
    await connection.raw(
        `INSERT INTO Users(name, nickname, email, id)
        VALUES('${name}','${nickname}','${email}','${id}')`
    )
}

async function getUserById(id: string): Promise<any> {
    if (id) {
        const result = await connection('Users').where({ id }).select('name', 'nickname')
        return result
    }
    else {
        throw 'Por favor preencha todos os campos para prosseguir'
    }
}

async function editUser(id: string, name?: string, nickname?: string, email?:string): Promise<any> {
    
    // switch(name && nickname && email){
    //     case(name):
        await connection.raw(
            `UPDATE Users
            SET name = '${name}'
            WHERE id = '${id}' `
            )
    //     break;
    //     case(nickname):
    //     await connection.raw(
    //         `UPDATE Users
    //         SET nickname='${nickname}'
    //         WHERE id = ${id} `
    //         )
    //     break;
    //     case(email):
    //     await connection.raw(
    //         `UPDATE Users
    //         SET email = '${email}'
    //         WHERE id = ${id} `
    //         )
    //     break;
    //     case(name && nickname):
    //     await connection.raw(
    //         `UPDATE Users
    //         SET name = '${name}', nickname='${nickname}'
    //         WHERE id = ${id} `
    //         )
    //     break;
    //     case(name && email):
    //     await connection.raw(
    //         `UPDATE Users
    //         SET name = '${name}', email='${email}'
    //         WHERE id = ${id} `
    //         )
    //     break;
    //     case(nickname && email):
    //     await connection.raw(
    //         `UPDATE Users
    //         SET nickname = '${nickname}', email='${email}'
    //         WHERE id = ${id} `
    //         )
    //     break;
    //     case(nickname && email && name):
    //     await connection.raw(
    //         `UPDATE Users
    //         SET nickname = '${nickname}', email='${email}', name='${name}'
    //         WHERE id = ${id} `
    //         )
    //     break;
    //     default:
    //         return 'dados incompletos'
    //     break;
    // }
}

async function createTask(title: string, description: string, limitDate: string, creatorUserId: string)
    : Promise<any> {
    const id = (new Date).getTime()
    await connection('Tasks').insert({ title, description, limitDate, creatorUserId, id})
}

createTask('oi','oi','21/03/2020','10')

async function getTaskById(id: number): Promise<any> {
    const result = connection.raw(
        `SELECT t.taskId, t.title, t.description, t.limitDate, t.status, u.id, u.nickname From Task t
        JOIN Users u ON u.id = t.user_id `
    )
    return result
}

// Endpoints

const app = express()
app.use(express.json())
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

app.put('/user', async (req: Request, res: Response) => {
    if (req.body.name && req.body.nickname && req.body.email) {
        try {
            const result = await createUser(req.body.name, req.body.nickname, req.body.email)
            res.status(200).send({
                message: 'success'
            })
        }
        catch (err) {
            res.status(400).send({
                message: err.message
            })
        }
    }
    else {
        res.status(400).send({ message: 'Por favor preencha os campos corretamnete para prosseguir' })
    }
})

app.get('/user/:id', async (req: Request, res: Response) => {
    if(req.params.id){
    try {
        const result = await getUserById(req.params.id)
        if(result[0]){
        res.status(200).send(result)
        }
        else{
            res.status(400).send({ message: 'Usuário não encontrado' })
        }
    }
    catch (err) {
        res.status(400).send({ message: err.message })
    }}
    else{
        res.status(400).send({
            message: 'Por favor preencha os campos corretamnete para prosseguir'
        })
    }
})

app.post('/user/edit', async (req: Request, res:Response)=>{
    if(req.body.name && req.body.name !== ''){
    try{
        editUser(req.body.id, req.body.name, req.body.nickname, req.body.email)
        res.status(200).send({
            message: 'success'
        })
    }
    catch(err){
        res.status(400).send({message: err.message})
    }}
    else{
        res.status(400).send({
            message: "O valor não pode ser passado em branco"
        })
    }
})

app.put('/task', async (req: Request, res: Response)=> {
    if(req.body.title && req.body.description && req.body.limitDate && req.body.creatorUserId){
        try{
            await createTask(req.body.title, req.body.description, req.body.limitDate, req.body.creatorUserId)
            res.status(200).send({
                message: 'Tarefa criada com sucesso'
            })
        }
        catch(err){
            res.status(400).send({
                message: err.message
            })
        }
    }
    else{
        res.status(400).send({
            message: 'Por favor preencha os campos corretamnete para prosseguir'
        })
    }
})