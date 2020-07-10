import {validateCharacter, Character} from '../src/exercicio1'

describe('testing validateCharacter', ()=>{
    it('testing characters name', ()=>{
        const mockCharacter: Character = {
            name :'',
            life : 80,
            defence: 80,
            strenght: 80
        }
        const result = validateCharacter(mockCharacter)
        expect(result).toBe(false)
    })
    // it('testing characters life', ()=>{
    //     const mockCharacter: Character = {
    //         name :'ze',
    //         life: '',
    //         defence: 80,
    //         strenght: 80
    //     }
    //     const result = validateCharacter(mockCharacter)
    //     expect(result).toBe(false)
    // })
    // it('testing characters strenght', ()=>{
    //     const mockCharacter: Character = {
    //         name :'ze',
    //         life: 80,
    //         defence: 80,
    //         strenght: ''
    //     }
    //     const result = validateCharacter(mockCharacter)
    //     expect(result).toBe(false)
    // })
    // it('testing characters defense', ()=>{
    //     const mockCharacter: Character = {
    //         name :'ze',
    //         life: 80,
    //         defence: '',
    //         strenght: 80
    //     }
    //     const result = validateCharacter(mockCharacter)
    //     expect(result).toBe(false)
    // })
    it('testing characters life', ()=>{
        const mockCharacter: Character = {
            name :'ze',
            life: 0,
            defence: 80,
            strenght: 80
        }
        const result = validateCharacter(mockCharacter)
        expect(result).toBe(true)
    })
    it('testing characters data', ()=>{
        const mockCharacter: Character = {
            name :'ze',
            life: 80,
            defence: 80,
            strenght: 80
        }
        const result = validateCharacter(mockCharacter)
        expect(result).toBe(true)
    })
})