import React from 'react';
import styled from 'styled-components';

const Formulario4Style = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

class Formulario4 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return(
        <Formulario4Style>
            <h2>O FORMULÁRIO ACABOU</h2>
            <p>Muito obrigado por participar! Entraremos em contato!</p>
        </Formulario4Style>
        )
    }
}

export default Formulario4