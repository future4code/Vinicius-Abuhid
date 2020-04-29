import { JSONFileManager } from "./JSONFileManager";

export class AccountData {
    name: string;
    cpf: number;
    birthDate: string;
    balance: number;
    transactions: Transaction[]

    constructor(name: string, cpf: number, birthDate: string) {
        this.name = name;
        this.cpf = cpf;
        this.birthDate = birthDate;
        this.balance = 0;
        this.transactions = []
    }

    getBalance(name: string, cpf: number) {
        console.log(this.balance)
    }

    addTransaction(name: string, cpf: number, value: number, description: string, date: string) {
        if (name === this.name && cpf === this.cpf) {
            const newTransaction: Transaction = {
                date,
                description,
                value
            }
            this.transactions = [...this.transactions, newTransaction]
            console.log('transação adicionada com sucesso')
            this.balance = this.balance + value
        }
        else {
            console.log('informações incorretas')
        }
    }

}

export class Transaction {
    date: string;
    description: string;
    value: number

    constructor(date: string, description: string, value: number) {
        this.date = date;
        this.description = description;
        this.value = value
    }
}

const fileManager: JSONFileManager = new JSONFileManager('../newAccount.json')
const totalBalance = fileManager.getObjectFromFIl('cleber', 8123)
totalBalance.getBalance('cleber', 8123)

