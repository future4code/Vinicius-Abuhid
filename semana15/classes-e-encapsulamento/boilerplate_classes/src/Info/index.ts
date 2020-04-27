export class AccountData{
    name: string;
    cpf: number;
    birthDate: string;
    balance: number;
    transactions: Transactions[]

    constructor(name: string, cpf: number, birthDate: string){
        this.name = name;
        this.cpf = cpf;
        this.birthDate = birthDate;
        this.balance = 0;
        this.transactions = []
    }
}

export class Transactions{
    date: string;
    description: string;
    value: number

    constructor(date: string, description: string, value: number){
        this.date = date;
        this.description = description;
        this.value = value
    }
}