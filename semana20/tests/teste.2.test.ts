import { Casino, User, LOCATION, NACIONALITY, verifyAge } from '../src/index'

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