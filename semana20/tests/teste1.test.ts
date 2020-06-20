import {authorizePurchase} from '../src/index'
describe('testing function authorizePurchase', ()=>{
    it('users balance greater than price', ()=>{
        const user1 = {
            name: 'Richard',
            balance: 50
        }
        const price = 40
        const result = authorizePurchase(user1, price)
        expect(result).toEqual({
            name: user1.name,
            balance: 10
        })
    })

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
})