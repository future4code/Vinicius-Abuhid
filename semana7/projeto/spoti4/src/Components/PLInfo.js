import React from 'react'
import styled from 'styled-components'

const PLInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 200px;
`
const StyledButton = styled.button`
    margin: 3px auto;
`
const SongItem = styled.ul`
  margin: 0;
  padding: 0;
  list-style-image: none;
`
function PLInfo(props) {

    return (
        <PLInfoWrapper>
            <SongItem>{props.musicas}</SongItem>
            <StyledButton onClick={props.addMusic}>Adicionar música</StyledButton>
        </PLInfoWrapper>
    )
}

export default PLInfo;