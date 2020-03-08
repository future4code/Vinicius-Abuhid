import React from 'react'
import styled from 'styled-components'
// import axios from 'axios'

const PLInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 200px;
`
const StyleBotao = styled.button`
    margin: 3px auto;
`

// const baseURL = 'https://us-central1-spotif4.cloudfunctions.net/api'

function PLInfo (props){

        return(
            <PLInfoWrapper>
                <ul>{props.musicas}</ul>
                <StyleBotao onClick={props.addMusic}>Adicionar música</StyleBotao>
            </PLInfoWrapper>
        )
}

export default PLInfo;