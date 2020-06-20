import React from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

const CardWrapper = styled(Paper)`
    display: flex;
    flex-direction: column;
    background-color: white;
    margin: 20px 0;
    padding: 5px;
`
const TitleWrapper = styled.p`
    color: #ff7828;
    font-weight: bold
`
const CandidateCard = (props) => {
    return (
        <div>
            <CardWrapper elevation={10}>
                <TitleWrapper>{props.candidate.name}</TitleWrapper>
                <p>Idade: {props.candidate.age}</p>
                <p>Texto de aplicação: {props.candidate.applicationText}</p>
                <p>Profissão: {props.candidate.profession}</p>
                <p>País: {props.candidate.country}</p>
                {props.button}
            </CardWrapper>
        </div>
    )
}

export default CandidateCard