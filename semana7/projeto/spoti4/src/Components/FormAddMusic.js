import React from 'react'
import styled from 'styled-components'


const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    align-items: center;
    border: dotted grey 1px;
    padding: 3px
`

const StyledInput = styled.input`
    margin-bottom: 5px
`

class FormAddMusic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nomeDaMusica: "",
            artistaDaMusica: "",
            URLDaMusica: ""
        }
    }

    salvaNome = (e) => {
        this.setState({
            nomeDaMusica: e.target.value
        })
    }

    salvaArtista = (e) => {
        this.setState({
            artistaDaMusica: e.target.value
        })
    }

    salvaURL = (e) => {
        this.setState({
            URLDaMusica: e.target.value
        })
    }

    limpaOsCampos = () => {
        this.setState({
            nomeDaMusica: "",
            artistaDaMusica: "",
            URLDaMusica: ""
        })
    }

    render() {
        return (
            <StyledForm>
                <StyledInput
                    type="text"
                    placeholder="Nome da música"
                    onChange={this.salvaNome}
                    value={this.state.nomeDaMusica}
                />
                <StyledInput
                    type="text"
                    placeholder='Artista'
                    onChange={this.salvaArtista}
                    value={this.state.autorDaMusica}
                />
                <StyledInput
                    type="text"
                    placeholder='URL da música'
                    onChange={this.salvaURL}
                    value={this.state.URLDaMusica}
                />
                <button
                    onClick=
                    {() => this.props.sendMusic(this.state.nomeDaMusica, this.state.artistaDaMusica, this.state.URLDaMusica)}
                >Enviar
                </button>
            </StyledForm>
        )
    }
}

export default FormAddMusic;