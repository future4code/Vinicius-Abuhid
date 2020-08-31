import {negativeNumbersCounter} from '../exercicio-16-07'

describe('testing function', ()=>{
    test('testing accuracy', ()=>{
        const sample = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3], [-4,-5,-6,-7]]
        const result = negativeNumbersCounter(sample)
        expect(sample).toBe(12)
    })
})