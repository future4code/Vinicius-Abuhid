import posts from '../reducers/posts'
import {showPosts, sendID} from '../Actions/index'

const mockStore = {
    postList: [],
    postChoose: ''
}

describe('Reducers', ()=>{
    it('recebe posts da requisição e altera o estado', ()=>{
        const mockedPost = ['post1', 'post2', 'post3']
        const newPost = showPosts(mockedPost)

        const result = posts(mockStore, newPost)

        expect(result.postList).toHaveLength(3)
        expect(result.postList).toContain('post1')
    })
    it('recebe id de um post e altera o estado',()=>{
        const mockedId = 'id'
        const sendId = sendID(mockedId)

        const result = posts(mockStore, sendId)

        expect(result.postChoose).toBeDefined()
        expect(result.postChoose).toEqual(mockedId)
    })
})