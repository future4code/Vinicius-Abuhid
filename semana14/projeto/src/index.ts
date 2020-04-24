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

const accountsData = '../costumers.json'

function createNewAccount(name: string, cpf: number, birthDate: string): void {
    let currentDate = new Date();
    let limitYear : number = currentDate.getFullYear() - 18
    let limitMonth : number = currentDate.getMonth()
    let limitDay : number = currentDate.getDate()
    let limitDate = new Date(limitYear, limitMonth, limitDay)
    let limitCode : number = limitDate.getTime()    

    let customerBirth: string[] = birthDate.split('/')
    let customerBirthDate = 
    new Date(Number(customerBirth[0]), Number(customerBirth[1]) - 1, Number(customerBirth[2]),)
    let checkLimit: number = customerBirthDate.getTime()
  
    if(checkLimit <= limitCode){
        let newAccount: accountData = {
            name: name, 
            cpf: cpf, 
            birthDate: birthDate,
            balance: 0,
            transactions: []
        }
        try{
            fs.appendFileSync(accountsData, `\n${JSON.stringify(newAccount)}`, 'utf8')
            console.log('Nova conta adicionada ao sistema interno')
        }catch(error){
            console.log(error);
        }
    }
    else{
        console.log('Não foi possível criar uma nova conta, pois o requerente é menor de idade.')
    }
}

function getAllAccounts():void{
        const promise = new Promise((resolve, reject) => {
            fs.readFile(accountsData, (err: Error, data: Buffer)=>{
                if(err){
                    reject(err)
                }
                else{
                    const readableData = data.toString()
                    resolve(readableData)
                }
            } )
        })
        promise.then(function (result) {
            console.log(result);
        }).catch(function (err) {
            console.log(err);
        });
}

let currentDate = moment()
console.log(currentDate.format())
let limitDate = currentDate.subtract(18, 'years')
console.log(limitDate.format())
let limitDateStamp = limitDate.unix()
console.log(limitDateStamp)

let customerBirth = moment('24/04/2004', 'DD/MM/YYYY')
console.log(customerBirth.format('MMMM'))
console.log(customerBirth.format())
let customerBirthStamp = customerBirth.unix()
console.log(customerBirthStamp)

if(customerBirthStamp <= limitDateStamp){
    console.log('parabens mizeravi')
}
else{
    console.log('deu ruim, papai')
}
// console.log(getAllAccounts())
