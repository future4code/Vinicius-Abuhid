import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
    background-color: #ff7828;
    width: 100%;
    display: flex;
    justify-content: center;
    color: white;
    height: 5vh;
`

const Footer = ()=>{
    return(
        <FooterWrapper>
            <p><b>Feito por Vinícius Abuhid e Vitor Lopes</b></p>
        </FooterWrapper>
    )
}

export default Footer;