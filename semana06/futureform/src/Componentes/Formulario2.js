import React from 'react';
import styled from 'styled-components';

const Formulario2Style = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Botao2 = styled.button`
margin-top: 40px
`

class Formulario2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return(
        <Formulario2Style>
            <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
            <p>5. Qual curso?</p>
            <input type="text"/>
            <p>6. Qual a unidade de ensino?</p>
            <input type="text"/>
            <Botao2 onClick={this.props.funcao2}>Próxima Etapa</Botao2>
        </Formulario2Style>
        )
    }
}

export default Formulario2