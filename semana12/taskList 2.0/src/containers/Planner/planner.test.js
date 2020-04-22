import React from 'react'
import {Planner} from './index'
import { shallow } from 'enzyme'
import {DayCard, Li} from './index'

const mockedTaskList = [{text: 'ola', day: 'Segunda-feira', id: 1},
{text: 'tudo bem', day: 'Terça-feira', id: 2}, {text: 'hello', day: 'Quarta-feira', id: 3}]

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
        const e = { preventDefault: jest.fn() }
        component.instance().submitTask(e)
        expect(e.preventDefault).toHaveBeenCalled()
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
        component.instance().componentDidMount()
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
        component.instance().getUserInfo(mockedUserInfo)
        expect(component.state().userInfo).toEqual({mockedName: 'mockedValue'})
    })
    it('testing list renderiazation', ()=>{
        const mockedOnSubmit = jest.fn()
        const mockedGetAllTasks = jest.fn()
        const component = shallow(<Planner 
        sendNewTask={mockedOnSubmit} 
        taskList={mockedTaskList}
        getAllTasks={mockedGetAllTasks}
        />)
        const eachDay = component.find(DayCard)
        expect(eachDay).toHaveLength(7)
        const eachTask = component.find(Li)
        expect(eachTask).toHaveLength(3)
    })
})