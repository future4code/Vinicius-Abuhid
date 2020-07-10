import { PostDatabase } from "../data/PostDataBase"

describe('forcing error', () => {
    it('duplicate post', async () => {
        expect.assertions(1)
        try {
            await new PostDatabase().createPost('0040', 'img2', 'description2', 'normal',
                '091c86f0-e89b-4e5f-b49e-bef766ca49dc')
        }
        catch (err) {
            expect(err.message).not.toBe(undefined)
        }
    })
    afterAll(()=>{
        new PostDatabase().destroyConnection
    })
})