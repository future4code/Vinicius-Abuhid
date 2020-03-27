import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    background-color: white;
    margin: 15px 0;
    padding: 5px
`

// const ImgWrapper = styled.img`
//     border: 1px solid black;
//     margin-right: 10px;
//     width: 340px;
//     height: 240px;
// `
const TitleWrapper = styled.p`
    color: #ff7828;
    font-weight: bold
`
// const TextAndActionsWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 100%;
// `
// const ActionWrapper = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     padding-right:10px;
// `

const CandidateCard = (props) => {
    return(
        <div>
            <CardWrapper>
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