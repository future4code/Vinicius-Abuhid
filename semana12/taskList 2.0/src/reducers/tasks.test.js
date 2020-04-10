import tasks from "./tasks"
import {getList} from '../actions/actions'

const mockStore = {
    taskList: []
}

describe('testing reducer', ()=>{
    it('GET_LIST', ()=>{
        const mockedTaskList = ['testing1', 'testing2', 'testing3']
        
        const mockedGetList = getList(mockedTaskList)
        const result = tasks(mockStore, mockedGetList)
        
        expect(mockedGetList.type).toBe('GET_LIST')
        expect(mockedGetList.payload.taskList).toEqual(mockedTaskList)
        expect(result.taskList).toBe(mockedTaskList)
        expect(result.taskList).toHaveLength(3)
        expect(result.taskList).toContain('testing1')
    })
})