import React from 'react';
import styled from 'styled-components';
import Mensagem from './Components/Mensagem';


const Aplicativo = styled.div`
display:flex;
flex-direction:column;
align-items: center;
background-color:grey;
font-family: 'Roboto Mono', monospace;
`
const MensagensDiv = styled.div`
border: 1px solid black;
height: 100vh;
width: 55%;
display: flex;
flex-direction:column;
justify-content: flex-end;
background-color: #E7E7E7;
box-shadow: 0px 1px 5px 0px black;
@media (max-width: 480px) {
    width: 100%;
}
`

const FormularioStyle = styled.div`
width: 100%;
display: flex;
height: 40px;
margin-bottom: 1%;
margin-top: 1%;
`
const InputNomeUsuario = styled.input`
width:15%;
border-radius: 8px;
margin-left: 1%;
padding-left: 5px;
box-shadow: 0px 1px 5px 0px black;
::placeholder {
    width: 100%;
    padding-left: 5px;
};

`
const InputMensagem = styled.input`
width:70%;
border-radius: 8px;
margin-left: 1%;
padding-left: 5px;
box-shadow: 0px 1px 5px 0px black;
::placeholder {
    width: 100%;
    padding-left: 5px;
};
`
const ButtonEnviar = styled.button`
width: 15%;
height: 100%;
border-radius: 8px;
margin-left: 1%;
margin-right: 1%;
box-shadow: 1px 1px 1px 0px black;
font-weight: bold;
:hover{
    background-color: #BEBEBE;
};
`

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listaDeMensagemDados: [],
            listaDeMensagens: [],
            inputNome: "",
            inputMensagem: ""
        }
    }

    inputNomeControlado = (e) => {
        this.setState({
            inputNome: e.target.value
        })
    }

    inputMensagemControlado = (e) => {
        this.setState({
            inputMensagem: e.target.value
        })
    }

    enviar = (e) => {

        const mensagemAuxiliar = {
            usuario: this.state.inputNome,
            mensagem: this.state.inputMensagem
        }
        let listaAuxiliar = this.state.listaDeMensagemDados
        listaAuxiliar.push(mensagemAuxiliar)
        this.setState({
            listaDeMensagemDados: listaAuxiliar
        })
        listaAuxiliar = this.state.listaDeMensagemDados.map((elemento, index) => {
            return (<Mensagem apagar={() => { this.apagar(index) }} indice={index} usuario={elemento.usuario} mensagem={elemento.mensagem} key={index} />)
        })
        this.setState({
            listaDeMensagem: listaAuxiliar
        })

        this.setState({
            inputNome: "",
            inputMensagem: ""
        })
    }

    verificaEnter = (e) => {
        if (e.keyCode === 13) {
            this.enviar()
        }

    }

    apagar = (index) => {
        const indice = index
        let listaAuxiliar = this.state.listaDeMensagemDados
        console.log(indice)
        console.log(this.state.listaDeMensagemDados)
        console.log(listaAuxiliar)
        listaAuxiliar.splice(indice, 1)
        console.log("Retirou")
        console.log(listaAuxiliar)

        this.setState({
            listaDeMensagemDados: listaAuxiliar
        })

        listaAuxiliar = this.state.listaDeMensagemDados.map((elemento, index) => {
            return (<Mensagem apagar={() => { this.apagar(index) }} indice={index} fotoPerfil="https://image.freepik.com/vetores-gratis/icone-de-usuario-do-sexo-masculino_17-810120247.jpg"
                usuario={elemento.usuario} mensagem={elemento.mensagem} key={index} />)
        })
        this.setState({
            listaDeMensagem: listaAuxiliar
        })
    }

    render() {
        return (
            <Aplicativo>
                <link href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" rel="stylesheet"></link>
                <MensagensDiv>
                    {this.state.listaDeMensagem}
                    <FormularioStyle>
                        <InputNomeUsuario type="text" placeholder="Usuário" onChange={this.inputNomeControlado} value={this.state.inputNome} />
                        <InputMensagem type="text" placeholder="Mensagem" onChange={this.inputMensagemControlado} onKeyDown={this.verificaEnter} value={this.state.inputMensagem} />
                        <ButtonEnviar onClick={this.enviar}>Enviar</ButtonEnviar>
                    </FormularioStyle>
                </MensagensDiv>
            </Aplicativo>
        )
    }
}

export default App
