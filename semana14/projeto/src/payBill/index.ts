import * as fs from 'fs'
import * as moment from 'moment'
import 'moment/locale/pt-br'
import {accountData, accountsData, transactions} from '../infos/index'
import getAllAccounts from '../getAllAccounts'

function payBill(name: string, cpf: number, value: number, description: string, date?: string){
    let allCustomers: accountData[] = getAllAccounts()
    let i: number
    for(i = 0; i <allCustomers.length; i++){
        if(allCustomers[i].name === name && allCustomers[i].cpf === cpf){
            let newTransaction: transactions = {
                value: -value,
                date: date? date : moment().format("DD/MM/YYYY"),
                description
            }
            allCustomers[i].transactions.push(newTransaction)
            try{
                fs.writeFileSync(accountsData, JSON.stringify(allCustomers))
                console.log('Conta paga com sucesso')
                console.log('Pagamento de R$' + value + ' em ' + 
                newTransaction.date)
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

payBill('lamark', 126888890, 20.00, 'conta telefone', '14/4/2018')

