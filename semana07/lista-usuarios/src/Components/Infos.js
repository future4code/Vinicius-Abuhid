import React from 'react'
import styled from 'styled-components'
import trash from '../Assets/trash.png'

const DataWrapper = styled.div`
    border: grey dotted 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    align-items: center;
`

const ImgStyled = styled.img`
    width: 32px;
    height: 32px;
    margin-bottom: 5px
`

const StyledButton = styled.button`
    background-color: blue;
    color: white;
    font-weight: bold
`

class InfosUsuario extends React.Component{

    render(){
        return(
            <DataWrapper>
                <h3>OLa{this.props.userName}</h3>
                <p>email: {this.props.userMail}</p>
                <ImgStyled src={trash}/>
                <StyledButton>Voltar</StyledButton>
            </DataWrapper>
        )
    }
}

export default InfosUsuario