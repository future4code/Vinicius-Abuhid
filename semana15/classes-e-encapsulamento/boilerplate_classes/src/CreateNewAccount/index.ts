import { AccountData } from "../Info";
import { JSONFileManager } from "../JSONFileManager";

class CreateNewAccount{
    newAccount: AccountData
    constructor(accountData: AccountData){
        this.newAccount = accountData
    }

    saveNewAccount(){
        const fileManager: JSONFileManager = new JSONFileManager('../../newAccount.json')
        fileManager.getObjectFromFIle()
        fileManager.writeObjectToFile(this.newAccount)
    }
}

const myAccount = new AccountData('elias', 8123, '23/06/1992')
// console.log(myAccount)
const createMyAccount = new CreateNewAccount(myAccount)
// console.log(createMyAccount)
createMyAccount.saveNewAccount()