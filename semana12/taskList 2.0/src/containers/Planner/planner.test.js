import React from 'react'
import {Planner} from './index'
import { shallow } from 'enzyme'
import {ButtonWrapper, InputWrapper, SelectWrapper} from '../../components/addNewTaskBar'

const mockedTaskList = [1,2,3]

describe('testing planner functions', ()=>{
    it('testing onSubmit', ()=>{
        const mockedOnSubmit = jest.fn()
        const mockedGetAllTasks = jest.fn()
        const component = shallow(<Planner 
            sendNewTask={mockedOnSubmit} 
            taskList={mockedTaskList}
            getAllTasks={mockedGetAllTasks}
            />)
        component.state.userInfo = {text: 'testText', day: 'testDay'}
        const onSubmit = component.instance().submitTask()
        expect(onSubmit).toHaveBeenCalled()
    })
    it('testing componentDidMount', ()=>{
        const mockedOnSubmit = jest.fn()
        const mockedGetAllTasks = jest.fn()
        const component = shallow(<Planner 
            sendNewTask={mockedOnSubmit} 
            taskList={mockedTaskList}
            getAllTasks={mockedGetAllTasks}
            />)
        const didMount = component.instance().componentDidMount()
        expect(mockedGetAllTasks).toHaveBeenCalled()
    })
})