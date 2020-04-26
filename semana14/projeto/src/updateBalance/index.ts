import * as fs from 'fs'
import * as moment from 'moment'
import 'moment/locale/pt-br'
import {accountData, accountsData, transactions} from '../infos/index'
import getAllAccounts from '../getAllAccounts'

let currentDate: string = moment().format("DD/MM/YYYY")

function updateBalance(name: string, cpf: number){
    let allCustomers: accountData[] = getAllAccounts()
    let i: number
    for(i = 0; i <allCustomers.length; i++){
        if(allCustomers[i].name === name && allCustomers[i].cpf === cpf){
            let x 
            for(x = 0; x < allCustomers[i].transactions.length; x++)
                if(allCustomers[i].transactions[x].date !== currentDate){
                    allCustomers[i].balance = allCustomers[i].balance + 
                    allCustomers[i].transactions[x].value                                         
                }
                try{
                    fs.writeFileSync(accountsData, JSON.stringify(allCustomers))
                    console.log('Saldo atualizado: ' + allCustomers[i].balance)
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

export default updateBalance