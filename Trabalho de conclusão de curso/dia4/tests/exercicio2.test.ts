import {Pile} from '../src/exercicio2'

const mockedPile = [1,2,3,4,5,6]

describe('exercicio2', ()=>{
    it('testing isEmpty', ()=>{
        const newPile = new Pile
        expect(newPile.isEmpty()).toBe(true)
    })
    it('testing push',()=>{
        const newPile = new Pile
        newPile.nodes = mockedPile
        expect(newPile.isEmpty()).toBe(false)
    })
    it('testing pop', ()=>{
        const newPile = new Pile
        newPile.nodes = mockedPile
        newPile.pop
        expect(newPile.nodes).toHaveLength(6)
    })
})