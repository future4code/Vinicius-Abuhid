import React from 'react'
import {shallow} from 'enzyme'
import LoginPage from '.'

describe('login funcionalitys', ()=>{
    it('goToSignUp', ()=>{
        const mockedSignUpDirectioner = jest.fn()
        const component = shallow(
            <LoginPage goToSignUp={mockedSignUpDirectioner}/>
        )
        const goToSignUp = component.find(GoToSignUpButton)
    })
})

// import React from 'react'
// import Header, {Logo} from '../Components/Header'
// import { shallow } from "enzyme";

// describe('components', ()=>{
//     it('goToLogin Test', ()=>{
//         const mockGoToLogin = jest.fn();
//         const component = shallow(
//             <Header goToFeed={mockGoToLogin}/>
//         )

//     const findLogo = component.find(Logo);
//     console.log(findLogo)
//     expect(findLogo).toHaveLength(1);
//     // findLogo.simulate("click");
//     expect(mockGoToLogin).toHaveBeenCalledWith()
//     })
// })