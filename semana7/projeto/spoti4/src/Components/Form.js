import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const StyledForm = styled.div`
    background-color: #126d91;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
`

const Botao = styled.button`
    margin-top: 10px;
`

const baseURL = 'https://us-central1-spotif4.cloudfunctions.net/api'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: "",
            listaPLs: []
        }
    }

    salvaNome = (e) => {
        const addPL = e.target.value
        this.setState({
            nome: addPL
        })
    }

    enviarPL = () => {
        const dadosNPL = {
            name: this.state.nome
        }
        const envioPromessa = axios.post(`${baseURL}/playlists/createPlaylist`, dadosNPL, {
            headers: { auth: 'string' }
        })
        envioPromessa.then((response) => {
            this.props.newPL()
            this.setState({
                nome: ""
            })
            alert("Playlist adicionada com sucesso")
        }).catch(error => {
            console.log(error)
            alert("Desculpe, não conseguimos adicionar a sua playlist. Tente novamente mais tarde")
        })
    }

    render() {
        return (
            <StyledForm>
                <h3>Adicionar playlist</h3>
                <input type="text"
                    value={this.state.nome}
                    placeholder="Nome da playlist"
                    onChange={this.salvaNome}
                />
                <Botao
                    onClick={this.enviarPL}
                >Enviar</Botao>
            </StyledForm>
        )
    }
}

export default Form;