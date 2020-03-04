import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const FormWrapper = styled.div`
    margin: 40px auto;
    border: solid black 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    align-items: center;
    width: 25%;
    height: 150px
`
const InputWrapper= styled.div`
    margin-bottom: 10px;
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

    baseURL = 'https://us-central1-future4-users.cloudfunctions.net/api'

    guardaNome = (e) => {
        this.setState({
            nome: e.target.value
        })
    }

    guardaEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    addNovoUsuario = () => {
        const novoUsuario = {
            name: this.state.nome,
            email: this.state.email
        }
        const request = axios.post(
            `${this.baseURL}/users/createUser`, novoUsuario,
             {headers : {
            'api-token': 'string', 'Content-Type': 'application/json'}}
            )

        request.then(response => {
        alert("Usuário cadastrado")
        }).catch(error => {
        alert("Erro ao cadastrar o usuário")
        })
        
        this.setState({
            nome: "",
            email: ""
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