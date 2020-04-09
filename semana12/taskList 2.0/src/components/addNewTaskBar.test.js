import React from 'react'
import AddNewTaskBar,{InputWrapper, 
    SelectWrapper, ButtonWrapper, FormWrapper} from "./addNewTaskBar"
import { shallow } from 'enzyme'

describe('testing addNewTaskBar funcionalitys', ()=>{
    it('testing onChange input',()=>{
        const onChange = jest.fn()
        const component = shallow(<AddNewTaskBar saveInfo={onChange}/>)
        const onChangeInput = component.find(InputWrapper)
        expect(onChangeInput).toHaveLength(1)
        onChangeInput.simulate("change")
        expect(onChange).toHaveBeenCalled()
    })
    it('testing select input', ()=>{
        const onChange = jest.fn()
        const component = shallow(<AddNewTaskBar saveInfo={onChange}/>)
        const onChangeSelect = component.find(SelectWrapper)
        expect(onChangeSelect).toHaveLength(1)
        onChangeSelect.simulate("change")
        expect(onChange).toHaveBeenCalled()
    })
    it('testing onSubmit', ()=>{
        const onSubmit = jest.fn()
        const component = shallow(<AddNewTaskBar submitInfo={onSubmit} />)
        const onSubmitButton = component.find(ButtonWrapper)
        // const onSubmitForm = component.find(FormWrapper)
        expect(onSubmitButton).toHaveLength(1)
        // expect(onSubmitForm).toHaveLength(1)
        onSubmitButton.simulate("click")
        expect(onSubmit).toHaveBeenCalled()
    })
})