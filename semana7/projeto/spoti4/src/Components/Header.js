import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
    background-color: #fe7e02;
    color: white;
    text-align: center;
`

const Header = () => {

    return (
        <StyledHeader>
            <h1>Spoti4</h1>
        </StyledHeader>
    )
}

export default Header;