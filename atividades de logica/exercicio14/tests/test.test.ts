import {discoveryMissingNumber} from '../index'

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,26,27,28,29]

describe('test',()=>{
    it('test',()=>{
        const result = discoveryMissingNumber(array)
        expect(result).toBe(24)
    })
})