import {accountData} from '../infos/index'
import getAllAccounts from '../getAllAccounts'

function getBalance(name: string, cpf: number): void{
    let allCustomers: accountData[] = getAllAccounts()
    let customerData: accountData[] = allCustomers.filter(customer => {
        return customer.cpf === cpf && customer.name === name
    })
    if(customerData.length === 0){
        console.log('Informações inválidas')
    }
    else{
        let currentBalance: number = customerData[0].balance
        console.log('Saldo total: ' + 'R$' + currentBalance)
    }
}

export default getBalance
getBalance('lamark', 126888890)