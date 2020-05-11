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

b.