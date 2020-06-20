import { PostDatabase } from "../data/PostDataBase"

describe('testing post funcionalitys', () => {
    it('post creator', async () => {
    //     const newPost = await new PostDatabase().createPost('008', 'img2', 'description2', 'normal',
    //         '091c86f0-e89b-4e5f-b49e-bef766ca49dc')
    //     const result = await new PostDatabase().getAllPosts()
    //     expect(result).toHaveLength(25)
    })
    afterAll(()=>{
        new PostDatabase().destroyConnection
    })
})
