import React from 'react';
import styled from 'styled-components';

const Formulario3Style = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Botao3 = styled.button`
margin-top: 40px
`

class Formulario3 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render(){
        return(
        <Formulario3Style>
            <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
            <p>5. Por que você não terminou um curso de graduação?</p>
            <input type="text"/>
            <p>6. Você fez algum curso complementar?</p>
            <select>
                <option>Nenhum</option>
                <option>Curso Tecnico</option>
                <option>Curso de inglês</option>
            </select>
            <Botao3 onClick={this.props.funcao3}>Próxima Etapa</Botao3>
        </Formulario3Style>
        )
    }
}

export default Formulario3