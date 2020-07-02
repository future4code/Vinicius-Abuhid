import {Queue} from '../src/exercicio3'

describe('exercicio3', ()=>{
    it('testing isEmpty', ()=>{
        const newQueue = new Queue
        expect(newQueue.isEmpty()).toBe(true)
    })
    it('testing enqueue',()=>{
        const newQueue = new Queue
        newQueue.enqueue(5)
        expect(newQueue.isEmpty()).toBe(false)
    })
    it('testing dequeue', ()=>{
        const newQueue = new Queue
        newQueue.dequeue()
        expect(newQueue.isEmpty()).toBe(true)
    })
})