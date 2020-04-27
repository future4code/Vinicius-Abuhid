import * as fs from 'fs'

export class JSONFileManager {

  fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName
  }
  
  getObjectFromFIle(){
    const accountList = JSON.parse(fs.readFileSync(this.fileName).toString());
    console.log(accountList)
  }
  
  writeObjectToFile(newAccount: Object) {
    const accountList = JSON.parse(fs.readFileSync(this.fileName).toString())
    const newList = accountList.lenght === 1 ? [accountList, newAccount] : accountList.push(newAccount)
    fs.writeFileSync(this.fileName, JSON.stringify(newList, null, 2))
  }
}
