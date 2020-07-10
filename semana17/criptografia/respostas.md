### Exercício 1
a. round = cost, que por sua vez é o número de vezes que a senha vai sofrer o processo de criptografia. Quanto maor o round, mais tempo demora.

b. class HashManager{
    public hash = async (s:string): Promise<any> =>{
    const rounds: number = Number(process.env.ROUNDS)
    const salt = await bcrypt.genSalt(rounds)
    const result = await bcrypt.hash(s, salt)
    return result
    }
}

c.public compareHash = async(s:string, hash:string): Promise<boolean> =>{
        return bcrypt.compare(s, hash)
    }

### Exercício 2
a. Devemos alterar o signup primeiro, pois antes de fazer um login, o usuário tem que fazer o signup

b.const newHashManager = new HashManager
const criptoPassword = await newHashManager.hash(req.body.password)

c. const newHashManager = new HashManager
const passwordChecker = await newHashManager.compareHash(req.body.password, user.password)

d. Não, pois esse endpoint apenas pega os dados do user já logado, e se ele já está logado, ele já teve sua password verficada aneriormente

### Exercício 3
a. ALTER TABLE UserList
ADD Column role VARCHAR(255) default 'normal';

b. GenerateToken.verifyToken = (token: string): AuthenticationData=> {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any
        const result = {id:payload.id, role: payload.role}
        return result
    }
    
export interface AuthenticationData {
    id: string;
    role: string
} 

c. public async createUser(email: string, password: string, id: string, role: string):Promise<void>{
        this.connection.raw(`
        INSERT INTO ${CreateUser.tableName}(email, password, id, role)
        VALUES('${email}','${password}','${id}','${role}');
        `)
    }

const newUser2: CreateUser = new CreateUser
await newUser2.createUser(userData.email, criptoPassword, usersId, userData.role)

const token = jwt.sign({
            id: input.id,
            role: input.role
        },
        process.env.JWT_KEY as string,
        {
            expiresIn: GenerateToken.expiresIn
        })

const newToken: GenerateToken = new GenerateToken
const userToken = newToken.generateToken({ id: usersId, role: req.body.role })

d. const newToken: GenerateToken = new GenerateToken
const userToken = newToken.generateToken({ id: user.id, role: req.body.role })

### Exercício 4
const token = req.headers.authorization as string
      const getToken: GenerateToken = new GenerateToken
      const getMyToken = getToken.verifyToken(token)
    
      if(getMyToken.role !== 'normal'){
        throw new Error('Unauthorized')
      }
      const searchUser: CreateUser = new CreateUser
      const user = await searchUser.searchUserById(getMyToken.id)
      res.status(200).send({
        id: user.id,
        email: user.email,
      })

### Exercício 5
export const deleteUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const token = req.headers.authorization as string
        const tokenHandler = new GenerateToken
        const getRoleByToken = tokenHandler.verifyToken(token)
        if (getRoleByToken.role === 'admin') {
            const user = new CreateUser
            const deleteUser = await user.deleteUserId(req.params.id)
            res.sendStatus(200)
        }
        else {
            throw new Error('Unauthorized')
        }
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
}

### Exercício 6
export const getUserById = (req: Request, res: Response) => {
    try {
        const generateToken = new GenerateToken
        const tokenValidation = generateToken.verifyToken(req.headers.token as string)
        const user = new CreateUser
        const userInfo = user.searchUserById(req.params.id)
        res.status(200).send(userInfo)
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
}

### Exercício 7
export abstract class BaseDataBase {
  private static connection: Knex | null = null;

  protected getConnection(): Knex {
    if (BaseDataBase.connection === null) {
      BaseDataBase.connection = knex({
        client: "mysql",
        connection: {
          host: process.env.DB_HOST,
          port: 3306,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE_NAME,
        },
      });
    }
    return BaseDataBase.connection;
  }

  public static async destroyConnection(): Promise<void> {
    if (BaseDataBase.connection) {
      await BaseDataBase.connection.destroy();
      BaseDataBase.connection = null;
    }
  }
}

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


finally{
        await BaseDataBase.destroyConnection()
    }
}

