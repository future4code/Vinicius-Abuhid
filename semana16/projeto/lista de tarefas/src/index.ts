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
    const result = await connection('Users').where({ id }).select('name', 'nickname')
    return result
}

async function editUser(id: string, name?: string, nickname?: string, email?: string): Promise<any> {
    if (name) {
        if (!nickname && !email) {
            await connection.raw(
                `UPDATE Users
                SET name = '${name}'
                WHERE id = '${id}' `
            )
        }
        else if (nickname && !email) {
            await connection.raw(
                `UPDATE Users
                SET name = '${name}', nickname='${nickname}'
                WHERE id = ${id} `
            )
        }
        else if (!nickname && email) {
            await connection.raw(
                `UPDATE Users
                SET name = '${name}', email='${email}'
                WHERE id = ${id} `
            )
        }
        else {
            await connection.raw(
                `UPDATE Users
                SET nickname = '${nickname}', email='${email}', name='${name}'
                WHERE id = ${id} `
            )
        }
    }
    else {
        if (nickname && email) {
            await connection.raw(
                `UPDATE Users
                SET email = '${email}', nickname='${nickname}'
                WHERE id = ${id} `
            )
        }
        else if (nickname && !email) {
            await connection.raw(
                `UPDATE Users
                SET nickname='${nickname}'
                WHERE id = ${id} `
            )
        }
        else if (!nickname && email) {
            await connection.raw(
                `UPDATE Users
                SET email='${email}'
                WHERE id = ${id} `
            )
        }
    }
}

async function createTask(title: string, description: string, limitDate: string, creatorUserId: string)
    : Promise<any> {
    const myDate = moment(limitDate, "DD-MM-YYYY").format("YYYY-MM-DD")
    const id = (new Date).getTime()
    await connection('Tasks').insert({ title, description, limitDate: myDate, creatorUserId, id })
}

async function getTaskById(id: string): Promise<any> {
    const result = connection.raw(
        `SELECT t.title, t.description, t.limitDate, t.creatorUserId, t.id, u.name as creatorName,
        u.nickname as creatorNickname
        From Tasks t
        JOIN Users u ON u.id = t.creatorUserId
        WHERE t.id = "${id}"; `
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
        res.status(400).send({ message: 'Por favor preencha os campos corretamente para prosseguir' })
    }
})

// const getUserPath = '/user/:id'

app.get(`/user/:id`, async (req: Request, res: Response) => {
    try {
        const result = await getUserById(req.params.id)
        if (result[0]) {
            res.status(200).send(result)
        }
        else {
            res.status(400).send({ message: 'Usuário não encontrado' })
        }
    }
    catch (err) {
        res.status(400).send({ message: err.message })
    }
})

app.get('/user/', async (req: Request, res: Response) => {
    res.status(400).send({
        message: 'Por favor preencha os campos corretamente para prosseguir'
    })
})

app.post('/user/edit', async (req: Request, res: Response) => {
    if(req.body.id){
    if (req.body.name || req.body.nickname || req.body.email) {
        try {
            editUser(req.body.id, req.body.name, req.body.nickname, req.body.email)
            res.status(200).send({
                message: 'success'
            })
        }
        catch (err) {
            res.status(400).send({ message: err.message })
        }
    }
    else {
        res.status(400).send({
            message: "Por favor preencha ao menos um dos campos para prosseguir"
        })
    }}
    else{
        res.status(400).send({
            message: "Por favor selecione a id de um usuário para poder modifica-lo"
        })
    }
})

app.put('/task', async (req: Request, res: Response) => {
    if (req.body.title && req.body.description && req.body.limitDate && req.body.creatorUserId) {
        try {
            await createTask(req.body.title, req.body.description, req.body.limitDate, req.body.creatorUserId)
            res.status(200).send({
                message: 'Tarefa criada com sucesso'
            })
        }
        catch (err) {
            res.status(400).send({
                message: err.message
            })
        }
    }
    else {
        res.status(400).send({
            message: 'Por favor preencha os campos corretamente para prosseguir'
        })
    }
})

app.get('/task/:id', async (req: Request, res: Response) => {
    try {
        const result = await getTaskById(req.params.id)
        if (result[0][0]) {
            let newObject = result[0][0]
            newObject.limitDate = moment(newObject.limitDate, 'YYYY-MM-DD').format('DD/MM/YYYY')
            res.status(200).send(newObject)
        }
        else {
            res.status(400).send({ message: 'Tarefa não encontrada' })
        }
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
})

app.get('/task/', async (req: Request, res: Response) => {
    res.status(400).send({
        message: 'Por favor preencha os campos corretamente para prosseguir'
    })
})