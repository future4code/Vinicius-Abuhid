import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
    width: 100%;
    height: 40px
`
const InputWrapper = styled.div`
    width: 99.5%
`

const AddTask = ()=> {
    return(
        <InputWrapper>
            <StyledInput 
            placeholder='O que tem que ser feito?'
            type='text'
            />
        </InputWrapper>
    )
}

export default AddTask