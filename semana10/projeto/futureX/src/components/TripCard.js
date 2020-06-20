import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/Logo.PNG'
import Paper from '@material-ui/core/Paper'

const CardWrapper = styled(Paper)`
    display: flex;
    align-items: center;
    margin: 30px;
    border: 1px solid black;
    background-color: white;
`

const ImgWrapper = styled.img`
    border-right: 1px solid #ff7828;
    margin-right: 10px;
    width: 300px;
    height: 150px;
`
const TitleWrapper = styled.h3`
    color: #ff7828;
    font-weight: bold
`
const TextAndActionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 5px
`
const ActionWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-right:10px;
`

const TripCard = (props) => {
    return (
        <div>
            <CardWrapper elevation={10}>
                <ImgWrapper
                    src={Logo}
                    alt='Foto da viagem' />
                <TextAndActionsWrapper>
                    <div>
                        <TitleWrapper>{props.trip.name}</TitleWrapper>
                        <p>{props.trip.description}</p>
                        <p>Planeta: {props.trip.planet}</p>
                        <p>Data: {props.trip.date}</p>
                        <p>Duração em dias terráqueos: {props.trip.durationInDays}</p>
                    </div>
                    <ActionWrapper>
                        <button
                            onClick={props.buttonFunction}
                        >{props.buttonText}</button>
                        {props.icon}
                    </ActionWrapper>
                </TextAndActionsWrapper>
            </CardWrapper>
        </div>
    )
}

export default TripCard