import React from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

const CardWrapper = styled(Paper)`
    display: flex;
    align-items: center;
    margin: 50px;
    background-color: white;
    padding: 5px
`

const ImgWrapper = styled.img`
    border-radius: 50%
    border: 1px solid black;
    margin-right: 10px;
    width: 200px;
    height: 200px;
`
const TitleWrapper = styled.h2`
    color: #ff7828;
    font-weight: bold
`
const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const TestimonyCard = (props) => {
    return(
        <div>
            <CardWrapper elevation={10}>
            <ImgWrapper src={props.imgProfile} alt='Foto de perfil'/>
            <TextWrapper>
                <TitleWrapper>{props.name}</TitleWrapper>
                <p>{props.description}</p>
            </TextWrapper>
            </CardWrapper>
        </div>    
    )
}

export default TestimonyCard