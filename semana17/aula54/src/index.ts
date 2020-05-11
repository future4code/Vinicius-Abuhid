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
      if (req.body.password) {

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

app.put('/login', async (req: Request, res: Response) => {
  const userData = {
    email: req.body.email,
    password: req.body.password
  }
  if (userData.email && userData.email.indexOf('@') !== -1) {
    try {
      const validateUser: CreateUser = new CreateUser
      const user = await validateUser.searchUser(userData.email)
      if (user.password === userData.password) {
        const newToken: GenerateToken = new GenerateToken
        const userToken = newToken.generateToken({ id: user.id })
        res.status(200).send({
          token: userToken
        })
      }
      else {
        res.status(400).send('Informações inválidas')
      }
    }
    catch (err) {
      res.status(400).send({
        message: err.message
      })
    }
  }
  else{
    res.status(400).send({
      message: 'Email inválido'
    })
  }
})

app.get('/user/profile', async(req:Request, res:Response)=>{
  try{
    const token = req.headers.authorization as string
    const getToken: GenerateToken = new GenerateToken
    const getMyToken = getToken.verifyToken(token)
    const searchUser: CreateUser = new CreateUser
    const user = await searchUser.searchUserById(getMyToken.id)
    res.status(200).send({
      id: user.id,
      email: user.email,
    })
  }
  catch(err){
    res.status(400).send({
      message: err.message,
    });
  }
})

console.log('eae meeeu')
console.log(newUser.searchUser('joe@joe'))
// 'A sua senha deve conter 6 ou mais caracteres'