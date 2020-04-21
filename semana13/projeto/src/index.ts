function createNewAccount(name: string, cpf: number, birthDate: string):{
    name: string, 
    cpf: number, 
    birthDate: string,
    balance: number
    transactions: {value: number, date: string, description: string}[]
} | string {
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
        return {
            name, 
            cpf, 
            birthDate,
            balance: 0,
            transactions: []
        }
    }
    else{
        console.log('Não foi possível criar uma nova conta, pois o requerente é menor de idade.')
    }
}

console.log(createNewAccount('pedro', 12, '2002/04/21'))

type accountData = {
    name: string, 
    cpf: number, 
    birthDate: string,
    balance: number
    transactions: transactions[]
}
type transactions = {value: number, date: string, description: string}
