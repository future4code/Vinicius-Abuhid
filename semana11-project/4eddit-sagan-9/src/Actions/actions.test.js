import {showPosts, sendID} from '../Actions/index'

describe("Todo Action-Creators", () => {
    it('recebe dados e joga no estado',()=>{
        const mockedPost = {
            id: 1,
            text: 'hello world',
            author: 'vinicius'
        }
        
        const result = showPosts(mockedPost)

        expect(result.type).toEqual("GET_POSTS");
        expect(result.payload.posts).toBeDefined();
        expect(result.payload.posts).toEqual(mockedPost)
    })
    it('recebe ID de post específico e joga no estado', ()=>{
        const mockedId = 1
        
        const result = sendID(mockedId)
        
        expect(result.type).toEqual("SEND_ID");
        expect(result.payload.postInfo).toBeDefined();
        expect(result.payload.postInfo).toEqual(mockedId)

    })
})