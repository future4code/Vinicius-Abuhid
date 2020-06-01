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
        name: "Cesar",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    }
    const user2: User = {
        name: "David",
        age: 19,
        nacionality: NACIONALITY.AMERICAN
    }
    const user3: User = {
        name: "Lara",
        age: 19,
        nacionality: NACIONALITY.BRAZILIAN
    }
    const user4: User = {
        name: "Lauren",
        age: 19,
        nacionality: NACIONALITY.AMERICAN
    }
    const user5: User = {
        name: "Mike",
        age: 21,
        nacionality: NACIONALITY.AMERICAN
    }
    const user6: User = {
        name: "Brady",
        age: 21,
        nacionality: NACIONALITY.AMERICAN
    }
    it('testing allowed brazilian', () => {
        const result = verifyAge(casino, [user1])
        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
        expect(result.brazilians.allowed.length).toBeLessThan(2)
    })
    it('testing allowed american', () => {
        const result = verifyAge(casino, [user2])
        expect(result.americans.unallowed).toHaveLength(0)
    })
    it('testing unallowed people', () => {
        const result = verifyAge(casino2, [user1, user2, user3, user4])
        expect(result.americans.unallowed).toContain('Lauren')
        expect(result.brazilians.unallowed).toContain('Cesar')
    })
    it('testing unallowed brazilian and allowed american', () => {
        const result = verifyAge(casino2, [user1, user3, user5, user6])
        expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
        expect(result.americans.unallowed.length).toBeLessThan(1)
        expect(result.americans.allowed.length).toBe(2)
    })
})