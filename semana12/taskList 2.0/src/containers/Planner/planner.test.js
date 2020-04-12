import React from 'react'
import {Planner} from './index'
import { shallow } from 'enzyme'

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
        component.state().userInfo = {text: 'testText', day: 'testDay'}
        const e = { preventDefault: () => {} }
        const onSubmit = component.instance().submitTask(e)
        expect(mockedOnSubmit).toHaveBeenCalledWith({text: 'testText', day: 'testDay'})
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
    it('testing getUserInfo',()=>{
        const mockedUserInfo = {target: {name: 'mockedName', value: 'mockedValue'}}
        const mockedOnSubmit = jest.fn()
        const mockedGetAllTasks = jest.fn()
        const component = shallow(<Planner 
            sendNewTask={mockedOnSubmit} 
            taskList={mockedTaskList}
            getAllTasks={mockedGetAllTasks}
            />)
        const mockedGetUserInfo = component.instance().getUserInfo(mockedUserInfo)
        expect(component.state().userInfo).toEqual({mockedName: 'mockedValue'})
    })
})