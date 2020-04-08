import React from 'react'
import Header, {Logo} from '../Components/Header'
import { shallow } from "enzyme";

describe('components', ()=>{
    it('goToLogin Test', ()=>{
        const mockGoToLogin = jest.fn();
        const component = shallow(
            <Header goToFeed={mockGoToLogin}/>
        )

    const findLogo = component.find(Logo);
    console.log(findLogo)
    expect(findLogo).toHaveLength(1);
    // findLogo.simulate("click");
    expect(mockGoToLogin).toHaveBeenCalledWith()
    })
})