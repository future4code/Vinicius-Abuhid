### EXERCÍCIO 1

    interface character {  
    name: string,  
    life: number,  
    defence: number,  
    strenght: number  
    }  

    function validateCharacter(character: character) {  
    if (!character.name || character.name === '') {  
        return false  
    }  
    const characterInfo = [character.life, character.defence, character.strenght]  
    for (let i = 0; i <= characterInfo.length - 1; i++) {  
        if (characterInfo[i] < 0 || characterInfo[i] === undefined) {  
            return false  
        }  
    }  
    return true  
    }  
  
console.log(validateCharacter({ name: 'ze', life: 80, defence: 80, strenght: 80 }))  

### EXERCICIO 2

    describe('testing validateCharacter', ()=>{  
    it('testing characters name', ()=>{  
        const mockCharacter: character = {  
            name :'',  
            life : 80,  
            defence: 80,  
            strenght: 80    
        }  
        const result = validateCharacter(mockCharacter)  
        expect(result).toBe(false)  
    })  
    it('testing characters life', ()=>{  
        const mockCharacter: character = {  
            name :'ze',    
            life: '',  
            defence: 80,  
            strenght: 80  
        }  
        const result = validateCharacter(mockCharacter)  
        expect(result).toBe(false)  
    })  
    it('testing characters strenght', ()=>{  
        const mockCharacter: character = {  
            name :'ze',  
            life: 80,   
            defence: 80,  
            strenght: ''  
        }  
        const result = validateCharacter(mockCharacter)  
        expect(result).toBe(false)    
    })  
    it('testing characters defense', ()=>{   
        const mockCharacter: character = {  
            name :'ze',  
            life: 80,  
            defence: '',  
            strenght: 80  
        }  
        const result = validateCharacter(mockCharacter)  
        expect(result).toBe(false)  
    })  
    it('testing characters life', ()=>{  
        const mockCharacter: character = {  
            name :'ze',  
            life: 0,  
            defence: 80,  
            strenght: 80  
        }  
        const result = validateCharacter(mockCharacter)  
        expect(result).toBe(true)  
    })  
    it('testing characters data', ()=>{  
        const mockCharacter: character = {  
            name :'ze',   
            life: 80,  
            defence: 80,  
            strenght: 80   
        }  
        const result = validateCharacter(mockCharacter)  
        expect(result).toBe(true)  
    })  
    })  

### EXERCÍCIO 3

    function calculateAttack(attacker: Character, defender: Character){  
    if(!validateCharacter(attacker) || !validateCharacter(defender)){  
        return 'invalid character'  
    }  
    if(attacker.strenght > defender.defence){  
        defender = {  
            ...defender,  
            life: defender.life - (attacker.strenght - defender.defence)  
        }  
        return 'new defender status: ' + defender.life  
    }  
    return 'no damage was suffered'  
    }  
  
    function calculateAttack2(attacker:Character, defender: Character, validator: (input:Character)=> boolean){  
    if(!validator(attacker) || !validator(defender)){  
        return 'invalid character'  
    }  
    if(attacker.strenght > defender.defence){  
        defender = {  
            ...defender,  
            life: defender.life - (attacker.strenght - defender.defence)  
        }  
        return 'new defender status: ' + defender.life  
    }  
    return 'no damage was suffered'  
    }

<li>A diferença entre ambas é que a primeira já tem uma função definida dentro do seu corpo, ao passo que a segunda recebe uma função como parâmetro que será definida quando chamada.

### EXERCÍCIO 4

<li>Devemos criar a um mock da função validateCharacter, uma vez que ela é a função que está dentro do corpo da outra função

    const successMock = jest.fn(()=>{  
    return true  
    })  

    const failMock = jest.fn(()=>{  
    return false  
    })  

### EXERCÍCIO 5

    describe('testing calculateAttack function', ()=>{  
    const fighter1: Character = {  
        name: 'Charizard',  
        life: 800,  
        defence: 750,  
        strenght: 1000  
    }  
    const fighter2: Character = {  
        name: 'Blastoise',  
        life: 900,    
        defence:800,  
        strenght: 800  
    }  
    const fighter3: Character = {  
        name: '',  
        life: 900,  
        defence:800,  
        strenght: 800  
    }  
    const mockValidator = jest.fn(()=>{  
        return true  
    })  
    const mockValidator2 = jest.fn(()=>{   
        return false  
    })  
    it('defender should loose 200 life points', ()=>{  
        const result = calculateAttack2(fighter1, fighter2, mockValidator)  
        expect(result).toBe('new defender status: ' + 700)  
        expect(mockValidator).toHaveBeenCalled()  
        expect(mockValidator).toHaveBeenCalledTimes(2)  
        expect(mockValidator).toHaveReturned()  
        expect(mockValidator).toHaveReturnedTimes(2)  
        expect(mockValidator).toHaveReturnedWith(true)  
    })  
    it('character should be invalid', ()=>{   
        expect.assertions(4)   
        try{  
            const result = calculateAttack2(fighter3, fighter2, mockValidator2)  
        }  
        catch (err) {  
            expect(err.message).toBe('invalid character')  
            expect(mockValidator2).toHaveBeenCalledTimes(1)  
            expect(mockValidator2).toReturnTimes(1)  
            expect(mockValidator2).toReturnWith(false)  
        }  
    })  
    })  

### EXERCÍCIO 6

    it('defender should suffer no damage', ()=>{  
        fighter3 = {  
            ...fighter3, name: 'venassaur'  
        }  
        const result = calculateAttack2(fighter2, fighter3, mockValidator)  
        expect(result).toBe('no damage was suffered')  
        expect(fighter3.life).toBe(900)  
    })  
    it('defender should lost some life points', ()=>{  
        const result = calculateAttack2(fighter1, fighter3, mockValidator)  
        expect(result).toBe('new defender status: ' + 700)   
        expect(fighter3.defence).toBeLessThan(fighter1.strenght)   
    })  
    it('validator should return false', ()=>{  
        expect.assertions(2)  
        try{  
            calculateAttack2(fighter2, fighter1, mockValidator2)  
        }
        catch (err) {    
            expect(err.message).not.toBe(undefined)  
            expect(err).toBeInstanceOf(Error)  
        }   
    })  
    it('testing others matchers', ()=>{  
            expect(calculateAttack2).toThrowError()  
    })  