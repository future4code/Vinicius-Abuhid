import React from 'react';
import styled from 'styled-components';

const Formulario1Style = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Botao = styled.button`
margin-top: 40px
`

class Formulario1 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    
        
    
    }
    render(){
        return(
            <Formulario1Style>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <p>1. Qual o seu nome?</p>
                <input type="text"/>
                <p>2. Qual sua idade?</p>
                <input type="text"/>
                <p>3. Qual seu email?</p>
                <input type="text"/>
                <p>Qual a sua escolaridade?</p>
                <select value={this.props.escolaridade} name="seletor escolaridade">
                    <option value={this.props.EMI}>Ensino Médio incompleto</option>
                    <option value={this.props.EMC}>Ensino Médio completo</option>
                    <option value={this.props.ESI}>Ensino Superior incompleto</option>
                    <option value={this.props.ESC}>Ensino Superior completo</option>
                </select>
                <Botao onClick={this.props.funcao} >Próxima Etapa</Botao>
            </Formulario1Style>
        )
    }
    
}

export default Formulario1;
