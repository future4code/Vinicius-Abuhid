### Exercício 1

    function authorizePurchase(user:User, price:number){  
    if(user.balance >= price){  
        user = {  
            name: user.name,  
            balance: user.balance - price  
        }  
        return user  
    }  
    return 'purchase not authorized'  
    }  
  
    interface User{  
    name:string,  
    balance:number  
    }  

### Exercício 2

    it('users balance same as price', () => {  
        const user2 = {  
            name: 'Kelvin',  
            balance: 40  
        }  
        const price = 40  
        const result = authorizePurchase(user2, price)  
        expect(result).toEqual({  
            name: user2.name,  
            balance: 0  
        })  
    })  

    it('users balance same as price', () => {
        const user3 = {
            name: 'Mark',
            balance: 30
        }
        const price = 40
        const result = authorizePurchase(user3, price)
        expect(result).toEqual('purchase not authorized')
    })

### Exercício 3

    function verifyAge(casino: Casino, users: User[]): Result {  
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
O mais difícil foi pensar a lógica para essa função  
  
### Exercício 4  
  
    describe('testing function verify age', () => {  
    const casino: Casino = {  
        name: 'casinao da massa',  
        location: LOCATION.BRAZIL  
    }  
    const casino2: Casino = {  
        name: 'big casino of the mass',  
        location: LOCATION.EUA  
    }  
    const user1: User = {  
        name: "Pedro",  
        age: 19,  
        nacionality: NACIONALITY.BRAZILIAN  
    }  
    const user2: User = {  
        name: "Johnson",  
        age: 19,  
        nacionality: NACIONALITY.AMERICAN  
    }  
    const user3: User = {        
        name: "Laura",  
        age: 19,  
        nacionality: NACIONALITY.BRAZILIAN  
    }  
    const user4: User = {  
        name: "Mary",                            
        age: 19,  
        nacionality: NACIONALITY.AMERICAN  
    }  
    const user5: User = {  
        name: "Micheal",  
        age: 21,  
        nacionality: NACIONALITY.AMERICAN  
    }  
    const user6: User = {    
        name: "Kate",  
        age: 21,  
        nacionality: NACIONALITY.AMERICAN  
    }  
    it('testing allowed brazilian', () => {  
        const result = verifyAge(casino, [user1])  
        expect(result.brazilians.allowed).toHaveLength(1)  
    })  
    it('testing allowed american', () => {  
        const result = verifyAge(casino, [user2])  
        expect(result.americans.allowed).toHaveLength(1)  
    })  
    it('testing unallowed brazilians and american', ()=>{  
        const result = verifyAge(casino2, [user1,user2, user3, user4])  
        expect(result.americans.allowed).toHaveLength(0)  
        expect(result.brazilians.allowed).toHaveLength(0)  
    })  
    it('testing unallowed br, and allowed am',()=>{  
        const result = verifyAge(casino2, [user1,user2, user5, user6])  
        expect(result.americans.allowed).toHaveLength(2)  
        expect(result.brazilians.allowed).toHaveLength(0)  
    })  
    })  
  
### Exercício 5  
  
    describe('testing function verify age', () => {  
    const casino: Casino = {  
        name: 'casinao da massa',  
        location: LOCATION.BRAZIL  
    }  
    const casino2: Casino = {  
        name: 'big casino of the mass',  
        location: LOCATION.EUA  
    }  
    const user1: User = {  
        name: "Cesar",   
        age: 19,  
        nacionality: NACIONALITY.BRAZILIAN  
    }  
    const user2: User = {  
        name: "David",  
        age: 19,  
        nacionality: NACIONALITY.AMERICAN  
    }  
    const user3: User = {  
        name: "Lara",  
        age: 19,  
        nacionality: NACIONALITY.BRAZILIAN  
    }  
    const user4: User = {   
        name: "Lauren",  
        age: 19,  
        nacionality: NACIONALITY.AMERICAN  
    }  
    const user5: User = {  
        name: "Mike",  
        age: 21,  
        nacionality: NACIONALITY.AMERICAN  
    }  
    const user6: User = {  
        name: "Brady",  
        age: 21,  
        nacionality: NACIONALITY.AMERICAN  
    }  
    it('testing allowed brazilian', () => {  
        const result = verifyAge(casino, [user1])  
        expect(result.brazilians.allowed.length).toBeGreaterThan(0)  
        expect(result.brazilians.allowed.length).toBeLessThan(2)  
    })  
    it('testing allowed american', ()=>{  
        const result = verifyAge(casino, [user2])  
        expect(result.americans.unallowed).toHaveLength(0)  
    })  
    it('testing unallowed people', ()=>{  
        const result = verifyAge(casino2, [user1, user2, user3, user4])  
        expect(result.americans.unallowed).toContain('Lauren')  
        expect(result.brazilians.unallowed).toContain('Cesar')  
    })  
    it('testing unallowed brazilian and allowed american', ()=>{  
        const result = verifyAge(casino2, [user1, user3, user5, user6])  
        expect(result.brazilians.unallowed.length).toBeGreaterThan(1)  
        expect(result.americans.unallowed.length).toBeLessThan(1)  
        expect(result.americans.allowed.length).toBe(2)  
    })  
    })  
 
### Exercício 6  
  
    describe('testing post funcionalitys', () => {  
    it('post creator', async () => {  
        const newPost = await new PostDatabase().createPost('008', 'img2', 'description2', 'normal',  
            '091c86f0-e89b-4e5f-b49e-bef766ca49dc')  
        const result = await new PostDatabase().getAllPosts()  
        expect(result).toHaveLength(25)  
    })  
    afterAll(()=>{  
        new PostDatabase().destroyConnection  
    })  
    })  
  
### Exercício 7  
  
    describe('forcing error', () => { 
    it('duplicate post', async () => {  
        expect.assertions(1)   
        try {  
            await new PostDatabase().createPost('0040', 'img2', 'description2', 'normal',  
                '091c86f0-e89b-4e5f-b49e-bef766ca49dc')  
        }  
        catch (err) {  
            expect(err.message).not.toBe(undefined)  
        }  
    })  
    afterAll(()=>{  
        new PostDatabase().destroyConnection  
    })  
    })  