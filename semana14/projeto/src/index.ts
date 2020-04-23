import * as fs from 'fs'

type transactions = {value: number, date: string, description: string}

type accountData = {
    name: string, 
    cpf: number, 
    birthDate: string,
    balance: number
    transactions: transactions[]
}

const accountsData = '../costumers.json'

function createNewAccount(name: string, cpf: number, birthDate: string): void {
    let currentDate = new Date();
    let limitYear : number = currentDate.getFullYear() - 18
    let limitMonth : number = currentDate.getMonth()
    let limitDay : number = currentDate.getDate()
    let limitDate = new Date(limitYear, limitMonth, limitDay)
    let limitCode : number = limitDate.getTime()

    let customerBirth: string[] = birthDate.split('/')
    let customerBirthDate = 
    new Date(Number(customerBirth[0]), Number(customerBirth[1]) - 1, Number(customerBirth[2]),)
    let checkLimit: number = customerBirthDate.getTime()
  
    if(checkLimit <= limitCode){
        let newAccount: accountData = {
            name: name, 
            cpf: cpf, 
            birthDate: birthDate,
            balance: 0,
            transactions: []
        }
        try{
            fs.appendFileSync(accountsData, `\n${JSON.stringify(newAccount)}`, 'utf8')
            console.log('Nova conta adicionada ao sistema interno')
        }catch(error){
            console.log(error);
        }
    }
    else{
        console.log('Não foi possível criar uma nova conta, pois o requerente é menor de idade.')
    }
}

function getAllAccounts(): string {
    try{
        const accountsList = fs.readFileSync(accountsData)
        const allAccountsData = accountsList.toString()
        return allAccountsData
    }catch(error){
        return 'informação indisponível no momento. Tente novamente mais tarde'
    }
}

createNewAccount('junior', 123, '2004/12/06')
console.log(getAllAccounts())
