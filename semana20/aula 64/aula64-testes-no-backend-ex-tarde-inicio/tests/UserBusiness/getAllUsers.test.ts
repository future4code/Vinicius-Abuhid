import { UserBusiness } from "../../src/business/UserBusiness"
import { UserRole, User } from "../../src/model/User"

describe('testing getAllUsers', () => {
    let userDataBase = {}
    let hashGenerator = {}
    let tokenGenerator = {}
    let idGenetator = {}
    test('testing not-authorized user', async () => {
        const user = new UserBusiness(userDataBase as any, hashGenerator as any,
            tokenGenerator as any, idGenetator as any)
        expect.assertions(2)
        try {
            await user.getAllUsers(UserRole.NORMAL)
        }
        catch (err) {
            expect(err.errorCode).toBe(400)
            expect(err.message).toEqual('you must be an admin to acces this area')
        }
    })
    test('function should return an users array', async () => {
        const userModel = new User('id', 'name', 'email', 'password', UserRole.ADMIN)
        const getAllUsers = jest.fn(() => [userModel])
        let userDataBase = {
            getAllUsers
        }
        const user = new UserBusiness(userDataBase as any, hashGenerator as any,
            tokenGenerator as any, idGenetator as any)
        const result = await user.getAllUsers(UserRole.ADMIN)
        expect(getAllUsers).toHaveBeenCalledTimes(1)
        expect(result).toEqual([{
            id: getAllUsers()[0].getId,
            name: getAllUsers()[0].getName,
            email: getAllUsers()[0].getEmail,
            role: getAllUsers()[0].getRole
        }])
    })
})