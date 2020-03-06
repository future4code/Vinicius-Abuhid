import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const PLWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 200px;
    align-items: center
`

const baseURL = 'https://us-central1-spotif4.cloudfunctions.net/api'

function CadaPL (props){

        return(
            <PLWrapper>
                <p onClick={props.verMusicas}>{props.nomePL}</p>
                <p onClick={props.apagaPL}>X</p>
            </PLWrapper>
        )
}

export default CadaPL;