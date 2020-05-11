import knex from 'knex'
import dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import { AddressInfo } from 'net'
import { CreateUser } from './Services/CreateUser/index'
import { GenerateId } from './Services/GenerateId/index'
import { AuthenticationData, GenerateToken } from './Services/GenerateToken/index'

dotenv.config();

export const connection = knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    port: 3003,
    user: process.env.DB_USER,
    password: process.env.DB_PASSSWORD,
    database: process.env.DB_NAME
  }
})

const app = express()
app.use(express.json())
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})

const newUser: CreateUser = new CreateUser
newUser.createUser('richard', 'r-dog', '40')

app.post('/signup', async (req: Request, res: Response) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password
    }
    if (req.body.email && req.body.email.indexOf('@') !== -1) {
      if (req.body.password && req.body.password.lenght >= 6) {

        const newId: GenerateId = new GenerateId
        const usersId = newId.generateId()

        const newUser2: CreateUser = new CreateUser
        await newUser2.createUser(userData.email, userData.password, usersId)

        const newToken: GenerateToken = new GenerateToken
        const userToken = newToken.generateToken({ id: usersId })

        res.status(200).send({ 'token': userToken })
      }
      else {
        res.status(400).send({
          message: req.body.password.lenght 
        })
      }
    }
    else {
      res.status(400).send({
        message: 'Email inválido'
      })
    }
  }
  catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
})

console.log('eae meeeu')

// 'A sua senha deve conter 6 ou mais caracteres'