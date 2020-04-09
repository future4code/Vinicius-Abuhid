import {getList} from '../actions/actions'
import { shallow } from 'enzyme'

describe('Testing acitons', ()=>{
    it('getList', ()=>{
        const test = 'testing...'
        const result = getList(test)
        expect(result.payload.taskList).toBe(test)
        expect(result.type).toEqual("GET_LIST")
    })
})