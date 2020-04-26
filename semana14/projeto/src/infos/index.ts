export type transactions = {value: number, date: string, description: string}

export type accountData = {
    name: string, 
    cpf: number, 
    birthDate: string,
    balance: number
    transactions: transactions[]
}

export const accountsData: string = '../../costumers.json'

// {"name":"pedro","cpf":12,"birthDate":"2002/04/21","balance":0,"transactions":[]};
// {"name":"carlos","cpf":123,"birthDate":"1990/12/06","balance":0,"transactions":[]};
// {"name":"sara","cpf":1748,"birthDate":"1996/05/05","balance":0,"transactions":[]};
// {"name":"joe","cpf":8877,"birthDate":"14/08/1986","balance":0,"transactions":[]};
// {"name":"hannah","cpf":140,"birthDate":"18/08/1990","balance":0,"transactions":[]};
// {"name":"oi","cpf":2,"birthDate":"18/5/1996","balance":0,"transactions":[]};
// {"name":"jaquelina","cpf":1296,"birthDate":"7/8/200","balance":0,"transactions":[]};
// {"name":"paulo","cpf":12688,"birthDate":"7/8/2000","balance":0,"transactions":[]};
// {"name":"lamark","cpf":1268888906,"birthDate":"7/8/2000","balance":0,"transactions":[]};
// {"name":"lamark","cpf":126888890,"birthDate":"10/10/2000","balance":0,"transactions":[]}