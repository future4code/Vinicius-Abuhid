// EXERCÍCIO 1

export function authorizePurchase(client: Client, price: number) {
    if (client.balance >= price) {
        client = {
            name: client.name,
            balance: client.balance - price
        }
        return client
    }
    return 'purchase not authorized'
}

interface Client {
    name: string,
    balance: number
}

// EXERCÍCIO 2

export function verifyAge(casino: Casino, users: User[]): Result {
    if (casino.location === 'EUA') {
        let allowedBr = []
        let unallowedBr = []
        let allowedAm = []
        let unallowedAm = []
        for (let user of users) {
            if (user.nacionality === NACIONALITY.BRAZILIAN) {
                if (user.age >= 21) {
                    allowedBr.push(user.name)
                }
                else {
                    unallowedBr.push(user.name)
                }
            }
            else {
                if (user.age >= 21) {
                    allowedAm.push(user.name)
                }
                else {
                    unallowedAm.push(user.name)
                }
            }
        }
        return {
            brazilians: {
                allowed: allowedBr,
                unallowed: unallowedBr
            },
            americans: {
                allowed: allowedAm,
                unallowed: unallowedAm
            }
        }
    }
    else {
        let allowedBr = []
        let unallowedBr = []
        let allowedAm = []
        let unallowedAm = []
        for (let user of users) {
            if (user.nacionality === NACIONALITY.BRAZILIAN) {
                if (user.age >= 18) {
                    allowedBr.push(user.name)
                }
                else {
                    unallowedBr.push(user.name)
                }
            }
            else {
                if (user.age >= 18) {
                    allowedAm.push(user.name)
                }
                else {
                    unallowedAm.push(user.name)
                }
            }
        }
        return {
            brazilians: {
                allowed: allowedBr,
                unallowed: unallowedBr
            },
            americans: {
                allowed: allowedAm,
                unallowed: unallowedAm
            }
        }
    }
}

export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
}

export enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
}

export interface User {
    name: string;
    age: number;
    nacionality: NACIONALITY;
}

export interface Casino {
    name: string;
    location: LOCATION;
}

export interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
}

export interface ResultItem {
    allowed: string[];
    unallowed: string[];
}
