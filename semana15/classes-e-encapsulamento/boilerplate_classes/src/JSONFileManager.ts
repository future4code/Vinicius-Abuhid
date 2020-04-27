import * as fs from 'fs'
import { AccountData } from '.';

export class JSONFileManager {

  fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName
  }

  public getObjectFromFIl(name: string, cpf: number) {
    const accountList = (fs.readFileSync(this.fileName).toString());
    const objectedList = accountList ? JSON.parse(accountList) : ''
    let anotherAccount: any | AccountData
    objectedList.forEach((account: any) => {
      if (name === account.name && cpf === account.cpf) {
        anotherAccount = new AccountData(
          account.name, account.cpf, account.birthDate)
      }
    })
    return anotherAccount
  }
  public writeObjectToFile(newAccount: Object) {
    const accountList = (fs.readFileSync(this.fileName).toString())
    const objectedList = accountList ? JSON.parse(accountList) : ''
    const newList = accountList ? [...objectedList, newAccount] : [newAccount]
    fs.writeFileSync(this.fileName, JSON.stringify(newList, null, 2))
  }
}
