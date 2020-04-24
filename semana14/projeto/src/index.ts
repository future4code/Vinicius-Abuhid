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

function createNewAccount(name: string, cpf: number, birthDate: string): void {
    let currentDate: moment.Moment = moment()
    let limitDate: moment.Moment = currentDate.subtract(18, 'years')
    let limitDateStamp: number = limitDate.unix()
    let customerBirth: moment.Moment = moment(birthDate, 'DD/MM/YYYY')
    let customerBirthStamp: number = customerBirth.unix()

    if(customerBirthStamp <= limitDateStamp){
        let allCustomers: accountData[] = getAllAccounts()
        let cpfList: number[] = allCustomers.map(customer => {
             return customer.cpf
        })
        cpfList.forEach((item, index) => {
            if(item !== cpf && index === (cpfList.length - 1)){
                let newAccount: accountData = {
                    name: name, 
                    cpf: cpf, 
                    birthDate: birthDate,
                    balance: 0,
                    transactions: []
                }
                try{
                    fs.appendFileSync(accountsData, `;\n${JSON.stringify(newAccount)}`, 'utf8')
                    console.log('Nova conta adicionada ao sistema interno')
                }catch(error){
                    console.log('Erro ao criar a conta, tente novamente mais tarde');
                }
            }
            else if(item !== cpf && index !== (cpfList.length - 1)){}
            else{
                console.log('Cpf já utilizado, favor conferir os seus dados')
            }
        })
        
    }
    else{
        console.log('Não foi possível criar uma nova conta, pois o requerente é menor de idade.')
    }
}

function getAllAccounts(){
    try{
        let allAccounts = fs.readFileSync(accountsData)
        let readableData = allAccounts.toString()
        let customersList: string[] = readableData.split(';')
        let properCustomersList: accountData[] = customersList.map(customer => {
        return JSON.parse(customer)
    })
        return properCustomersList
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
        console.log(currentBalance)
        return currentBalance}
}

function addBalance(name: string, cpf: number, value: number): accountData[] | number{
    let allCustomers: accountData[] = getAllAccounts()
    let customerData: accountData[] = allCustomers.filter(customer => {
        return customer.cpf === cpf && customer.name === name
    })
    if(customerData.length === 0){
        console.log('Informações inválidas')
    }
    else{
       customerData.forEach(customer => {
            customer.balance = customer.balance + value
        })
        console.log(customerData)
        return customerData
    }
}


addBalance('lamark', 126888890, 50)

