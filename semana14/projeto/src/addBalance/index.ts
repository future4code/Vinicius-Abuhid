import * as fs from 'fs'
import * as moment from 'moment'
import 'moment/locale/pt-br'
import {accountData, accountsData, transactions} from '../infos/index'
import getAllAccounts from '../getAllAccounts'
import updateBalance from '../updateBalance'

function addBalance(name: string, cpf: number, value: number): void{
    let allCustomers: accountData[] = getAllAccounts()
    let i: number
    for(i = 0; i <allCustomers.length; i++){
        if(allCustomers[i].name === name && allCustomers[i].cpf === cpf){
            allCustomers[i].balance = allCustomers[i].balance + value
            let newTransaction: transactions = {
                value,
                date: moment().format("DD/MM/YYYY"),
                description: 'Depóstio de dinheiro'
            }
            allCustomers[i].transactions.push(newTransaction)
            let stringfiedAllCustomers = JSON.stringify(allCustomers)
            try{
                fs.writeFileSync(accountsData, JSON.stringify(allCustomers))
                console.log('Depósito de R$' + newTransaction.value + ' em ' + 
                newTransaction.date)
                // updateBalance(name, cpf)
                i = allCustomers.length
            }
            catch{
                console.log('Não foi possível realizar a opreação no momento. Tente novamente mais tarde')
            }
        }
        else if ((allCustomers[i].name !== name || allCustomers[i].cpf !== cpf) &&
        i === allCustomers.length -1){
            console.log('informações inválidas')
        }
    }
}

addBalance('lamark', 126888890, 0.50)