import {checkTheft} from '../exercicio1'

describe('test', ()=>{
    it('test',()=>{
        const result = checkTheft([2,3,6,12,3,9,11,4])
        expect(result).toBe(28)
    })
})