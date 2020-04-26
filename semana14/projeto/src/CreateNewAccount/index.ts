import * as fs from 'fs'
import * as moment from 'moment'
import 'moment/locale/pt-br'
import {accountData, accountsData, transactions} from '../infos/index'
import getAllAccounts from '../getAllAccounts'

function createNewAccount(name: string, cpf: number, birthDate: string): void {
    let currentDate: moment.Moment = moment()
    let limitDate: moment.Moment = currentDate.subtract(18, 'years')
    let limitDateStamp: number = limitDate.unix()
    let customerBirth: moment.Moment = moment(birthDate, 'DD/MM/YYYY')
    let customerBirthStamp: number = customerBirth.unix()

    if(customerBirthStamp <= limitDateStamp){
        let allCustomers: accountData[] = getAllAccounts()
        let i: number
        for(i = 0; i < allCustomers.length; i++){
            if(allCustomers[i].cpf !== cpf && i === (allCustomers.length - 1)){
                let newAccount: accountData = {
                    name: name, 
                    cpf: cpf, 
                    birthDate: birthDate,
                    balance: 0,
                    transactions: []
                }
                allCustomers.push(newAccount)
                i = allCustomers.length
                try{
                    fs.writeFileSync(accountsData, JSON.stringify(allCustomers))
                    console.log('Nova conta adicionada ao sistema interno')
                }catch(error){
                    console.log('Erro ao criar a conta, tente novamente mais tarde');
                }
            }
            else if(allCustomers[i].cpf === cpf){console.log('Cpf já utilizado, favor conferir os seus dados')
            i = allCustomers.length}
        }
    }
    else{
        console.log('Não foi possível criar uma nova conta, pois o requerente é menor de idade.')
    }
}

createNewAccount('lamarksoner', 124568888901, '10/10/1990')