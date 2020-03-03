import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const FormWrapper = styled.div`
    margin: 40px auto;
    border: solid black 1px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center
`
const InputWrapper= styled.div`
    margin-bottom: 5px;
`

const StyledButton = styled.button`
    background-color: blue;
    color: white;
    font-weight: bold
`

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nome: "",
            email: ""
        }
    }

    guardaNome = (e) => {
        this.setState({
            nome: e.target.value
        })
        console.log(this.state.nome)
    }

    guardaEmail = (e) => {
        this.setState({
            email: e.target.value
        })
        console.log(this.state.email)
    }

    addNovoUsuario = () => {
        console.log("tests")
        const novoUsuario = {
            "name": this.state.nome,
            "email": this.state.email
        }
        const request = axios.post(
            'https://us-central1-future4-users.cloudfunctions.net/api', novoUsuario, {headers : {
                'auth': 'string'}}, {headers: {
                    'Content-Type': 'application/json'}}
                )

        request.then((resposta) => {
        console.log(resposta)
        }).catch((erro) => {
        console.log(erro)
        })
        
    }

    render(){
        return(
            <FormWrapper>
                <InputWrapper>
                    <label>Nome:</label>
                    <input type="text" 
                    value={this.state.nome}
                    onChange = {this.guardaNome}
                    />
                </InputWrapper>
                <InputWrapper>
                    <label>Email:</label>
                    <input type="text" 
                    value={this.state.email}
                    onChange = {this.guardaEmail}
                    />
                </InputWrapper>
                <StyledButton onClick={this.addNovoUsuario}>Salvar</StyledButton>
            </FormWrapper>
        )
    }
}

export default Form