import * as fs from 'fs'
import 'moment/locale/pt-br'
import {accountData, accountsData} from '../infos/index'

function getAllAccounts(): accountData[]{
    try{
        let allAccounts: Buffer = fs.readFileSync(accountsData)
        let readableData: string = allAccounts.toString()
        let customersList: accountData[] = JSON.parse(readableData)
        return customersList
    }catch(error){
        console.log(error)
    }
}

export default getAllAccounts;