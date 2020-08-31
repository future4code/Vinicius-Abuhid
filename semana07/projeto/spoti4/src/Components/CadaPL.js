import React from 'react'
import styled from 'styled-components'

const PLWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 200px;
    align-items: center;
    padding: 0;
`

function CadaPL(props) {

    return (
        <PLWrapper>
            <p onClick={props.verMusicas}>{props.nomePL}</p>
            <p onClick={props.apagaPL}>X</p>
        </PLWrapper>
    )
}

export default CadaPL;