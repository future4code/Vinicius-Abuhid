import { Character } from "../src/exercicio1"
import { calculateAttack2, calculateAttack } from "../src/exercicio3"
import { convertToObject } from "typescript"
    //  EXERCÍCIO 5
describe('testing calculateAttack function', ()=>{
    let fighter1: Character = {
        name: 'Charizard',
        life: 800,
        defence: 750,
        strenght: 1000
    }
    let fighter2: Character = {
        name: 'Blastoise',
        life: 900,
        defence:800,
        strenght: 800
    }
    let fighter3: Character = {
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
    it('defender should lost 200 life points', ()=>{
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
    // EXERCÍCIO 6
    it('defender should suffer no damage', ()=>{
        fighter3 = {
            ...fighter3, name: 'venaussaur'
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
})