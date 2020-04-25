import * as fs from 'fs'
import * as moment from 'moment'

type transactions = {value: number, date: string, description: string}

type accountData = {
    name: string, 
    cpf: number, 
    birthDate: string,
    balance: number
    transactions: transactions[]
}

const accountsData: string = '../costumers.json'

// function createNewAccount(name: string, cpf: number, birthDate: string): void {
//     let currentDate: moment.Moment = moment()
//     let limitDate: moment.Moment = currentDate.subtract(18, 'years')
//     let limitDateStamp: number = limitDate.unix()
//     let customerBirth: moment.Moment = moment(birthDate, 'DD/MM/YYYY')
//     let customerBirthStamp: number = customerBirth.unix()

//     if(customerBirthStamp <= limitDateStamp){
//         let allCustomers: accountData[] = getAllAccounts()
//         let cpfList: number[] = allCustomers.map(customer => {
//              return customer.cpf
//         })
//         cpfList.forEach((item, index) => {
//             if(item !== cpf && index === (cpfList.length - 1)){
//                 let newAccount: accountData = {
//                     name: name, 
//                     cpf: cpf, 
//                     birthDate: birthDate,
//                     balance: 0,
//                     transactions: []
//                 }
//                 try{
//                     fs.appendFileSync(accountsData, `;\n${JSON.stringify(newAccount)}`, 'utf8')
//                     console.log('Nova conta adicionada ao sistema interno')
//                 }catch(error){
//                     console.log('Erro ao criar a conta, tente novamente mais tarde');
//                 }
//             }
//             else if(item !== cpf && index !== (cpfList.length - 1)){}
//             else{
//                 console.log('Cpf já utilizado, favor conferir os seus dados')
//             }
//         })
//     }
//     else{
//         console.log('Não foi possível criar uma nova conta, pois o requerente é menor de idade.')
//     }
// }

function getAllAccounts(){
    try{
        let allAccounts = fs.readFileSync(accountsData)
        let readableData = allAccounts.toString()
        let customersList = JSON.parse(readableData)
        return customersList
    }catch(error){
        console.log(error)
    }
}

function getBalance(name: string, cpf: number): void | number{
    let allCustomers: accountData[] = getAllAccounts()
    let customerData: accountData[] = allCustomers.filter(customer => {
        return customer.cpf === cpf && customer.name === name
    })
    if(customerData.length === 0){
        console.log('Informações inválidas')
    }
    else{
        let currentBalance: number = customerData[0].balance
        console.log('Saldo total: ' currentBalance)
        return currentBalance}
}

function addBalance(name: string, cpf: number, value: number){
    let allCustomers: accountData[] = getAllAccounts()
    allCustomers.forEach(customer => {
        if(customer.cpf === cpf && customer.name === name){
            return customer.balance = customer.balance + value
        }
    })
    try{
    fs.writeFileSync(accountsData, JSON.stringify(allCustomers))
    console.log('O seu saldo foi atualizado! Confira no extrato')
    }
    catch(err){
        console.log(err)
    }
}

getBalance('lamark', 126888890)

// {"name":"pedro","cpf":12,"birthDate":"2002/04/21","balance":0,"transactions":[]};
// {"name":"carlos","cpf":123,"birthDate":"1990/12/06","balance":0,"transactions":[]};
// {"name":"sara","cpf":1748,"birthDate":"1996/05/05","balance":0,"transactions":[]};
// {"name":"joe","cpf":8877,"birthDate":"14/08/1986","balance":0,"transactions":[]};
// {"name":"hannah","cpf":140,"birthDate":"18/08/1990","balance":0,"transactions":[]};
// {"name":"oi","cpf":2,"birthDate":"18/5/1996","balance":0,"transactions":[]};
// {"name":"jaquelina","cpf":1296,"birthDate":"7/8/200","balance":0,"transactions":[]};
// {"name":"paulo","cpf":12688,"birthDate":"7/8/2000","balance":0,"transactions":[]};
// {"name":"lamark","cpf":1268888906,"birthDate":"7/8/2000","balance":0,"transactions":[]};
// {"name":"lamark","cpf":126888890,"birthDate":"10/10/2000","balance":0,"transactions":[]}