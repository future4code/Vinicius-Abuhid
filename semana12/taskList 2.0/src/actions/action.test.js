import {getList, getTaskList, addNewTask, baseURL} from '../actions/actions'
import axios from 'axios'

describe('Testing acitons', ()=>{
    it('getList', ()=>{
        const test = 'testing...'
        const result = getList(test)
        expect(result.payload.taskList).toBe(test)
        expect(result.type).toEqual("GET_LIST")
    })
})

const mockedTask = [{
    text: 'test tests',
    day: 'everyday'
}]

let mockedDispatch


describe('testind asyncs', ()=>{
    beforeEach(()=> {
        mockedDispatch = jest.fn()
    })
    it('getTaskList', async ()=>{
        axios.get = jest.fn(()=>({
            data: mockedTask
        }))
        await getTaskList()(mockedDispatch)
        expect(axios.get).toHaveBeenCalledWith(baseURL)
        expect(mockedDispatch).toHaveBeenCalledWith(getList(mockedTask))
    })
    it('addNewTask', async()=>{
        axios.post = jest.fn(()=>({
            status: 200
        }))
        await addNewTask(mockedTask[0])(mockedDispatch)
        expect(axios.post).toHaveBeenCalledWith(baseURL, mockedTask[0])
        expect(mockedDispatch).toHaveBeenCalledTimes(1)
    })
})
