import { UserBusiness } from "../../src/business/UserBusiness"
import { User, UserRole } from "../../src/model/User";

describe('testing getUserById', () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};

    test('user should be invalid', async () => {
        expect.assertions(2)
        const getUserById = jest.fn(() => false)
        userDatabase = {
            getUserById
        }
        try {
            const user = new UserBusiness(userDatabase as any, hashGenerator as any,
                tokenGenerator as any, idGenerator as any)
            await user.getUserById('id')
        }
        catch (err) {
            expect(err.errorCode).toBe(404)
            expect(err.message).toBe('user not found')
        }
    })
    test('function should return a token', async () => {
        const userModel = new User('id', 'name', 'email', 'password', UserRole.ADMIN)
        const getUserById = jest.fn((id: string) => userModel)
        userDatabase = {
            getUserById
        }
        const users = new UserBusiness(userDatabase as any, hashGenerator as any,
            tokenGenerator as any, idGenerator as any)
        const userData = await users.getUserById('id')
        expect(getUserById).toHaveBeenCalledWith('id')
        expect(userData).toEqual({
            id: userModel.getId,
            name: userModel.getName,
            email: userModel.getEmail,
            role: userModel.getRole
        })
    })
})