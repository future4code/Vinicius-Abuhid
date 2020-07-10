import React from 'react'
import styled from 'styled-components'

const ContainerGeral = styled.div`
display: flex;
justify-content: center;
padding: 5px
`
const ContainerForms = styled.form `
border: solid black 1px;
width: 35%;
display: flex;
flex-direction: column;
align-items: center;
`

class Formulario extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nome: "",
            fotodeperfil:"",
            fotodopost:""
        }
    }

    onChangeNome = (event) => {
        this.setState({nome: event.target.value})
    }

    onClickEnviar = (event) => {
        event.preventDefault()
        this.props.onCriaPost({username: this.state.nome, fotoPerfil: this.state.fotodeperfil,
        imagem: this.state.fotodopost})
    }

    render(){
        return(
        <ContainerGeral>
            <ContainerForms>
            <label>Autor do post</label>
            <input type="text" value={this.state.nome} onChange={this.onChangeNome}/>
            <label>Foto de perfil</label>
            <input type="image"/>
            <label>Foto do post</label>
            <input type="image"/>
            <button onClick={this.onClickEnviar}>Enviar</button>
            </ContainerForms>
        </ContainerGeral>
        )
    }
}

export default Formulario;