### Exercício 1
a. Concordo, pois as strings nos dão mais possibilidades que número

b. class GenerateId{
    public generateId(): string {
        return v4()
    }
}

### Exercício 2
a. O código retratado na presente questão apresenta: o knex configurado com um determinado banco de dados para fazer a ligação deste com o nosso código. Além disso tem uma função que chama o knex para nos levar ao banco de dados e lá salvar informações, através de uma query construída dentro desta função.

b. CREATE TABLE UserList(
name VARCHAR (255) NOT NULL,
nickname VARCHAR(255) NOT NULL UNIQUE,
id VARCHAR(255) PRIMARY KEY
)

c. class CreateUser{
    
    private static tableName: string

    private async createUser(name: string, email: string, id: string){
        await connection.insert({name, email, id}).into('UsersList')
    }
}

d.

### Exercíco 3
a. O comando 'as string' fala para o ts que aquela variável será lida como uma string. Esse comando é importate, pois aquela variável é de um tipo que não se encaixa no código naquele momento, aí precisamos 'mudar' o tipo dela para que haja esse encaixe.

b.export class GenerateToken{
    private static expiresIn: number = 120
    
    generateToken = (input: AuthenticationData): string =>{
        const token = jwt.sign({
            id: input.id
        },
        'process.env.JWT_KEY as string,',
        {
            expiresIn: GenerateToken.expiresIn
        })
        return token
    }
}

### Exercício 4
app.post('/signup', async (req: Request, res: Response) => {
  try {
    const userData = {
      email: req.body.email,
      password: req.body.password
    }
    if (req.body.email && req.body.email.indexOf('@') !== -1) {
      if (req.body.password){

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

### Exercício 5
public async searchUser(email:string){
        const result = await connection.raw(`
        SELECT * From ${CreateUser.tableName}
        WHERE email = '${email}'
        `)
        return result[0];
    }

### Exercício 6 
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

### Exercício 7
a. as = qualquer tipo. O jwt.verify, pode retornar qualquer coisa, dependendo do que é verificado.
b. verifyToken = (token: string): AuthenticationData=> {
        const payload = jwt.verify(token,'process.env.JWT_KEY as string') as any
        const result = {id:payload.id}
        return result
    }
    