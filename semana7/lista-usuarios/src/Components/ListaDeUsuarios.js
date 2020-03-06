import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import InfosUsuario from './Infos'

const ListaWrapper = styled.div`
    margin: 0 auto;
    text-align: center;
    width: 20%;
`

const UsuarioWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 200px
`

const BotaoDeletar = styled.p`
    color: red
`

class ListaUsuarios extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todosOsUsuarios: [],
            statusUser: false,
            telaMostrada: ""
        }
    }

    baseURL = 'https://us-central1-future4-users.cloudfunctions.net/api'


    componentDidMount(){
        this.buscarTodosUsuarios()
    }

    buscarTodosUsuarios = () => {
        const allUsersPromessa = axios.get(`${this.baseURL}/users/getAllUsers`, {headers : {
            'api-token': "string"
        }})
        allUsersPromessa.then(response => {
            console.log(response.data)
            this.setState({
                todosOsUsuarios: response.data.result
            })
        }).catch(error => {
            console.log(error)
        })
    }

    apagarUsuario = (idDoUsuario) => {
        let pense2Vezes = window.confirm("Tem certeza que deseja apagar o usuario?")
        if (pense2Vezes){ 
        const promessaApagarUsuario = axios.delete(`${this.baseURL}/users/deleteUser?id=${idDoUsuario}`,
        {headers: {
            'api-token': 'string'
        }})
        promessaApagarUsuario.then((response) => {
            alert("Usuario apagado com sucesso!!");
            this.buscarTodosUsuarios();
        }).catch((error)=> {
            alert("Erro ao apagar usuario")
        })}
        else {
            console.log("adkhb")
        }
    }

    // mostraDados = (userID) => {
    //     const valor = this.state.statusUser
    //     this.setState({
    //         statusUser: !valor
    //     })

    //     const userDadosPromessa = axios.get(`${this.baseURL}/users/getUser/${userID}`, {
    //         headers : {
    //             'api-token': 'string'
    //         }
    //     } )
    //     userDadosPromessa.then(response => {
    //         console.log(response.data)
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }

    render(){
        return(
            <ListaWrapper>
                <h2>Usuários Cadastrados</h2>
                {this.state.todosOsUsuarios.map((usuario)=> {
                    return  <div key={usuario.id}>
                            <UsuarioWrapper>
                            <p onClick={() => this.mostraDados(usuario.id)}>
                            {usuario.name}</p>
                            <BotaoDeletar 
                            onClick={()=> this.apagarUsuario(usuario.id)}>
                            X
                            </BotaoDeletar>
                            </UsuarioWrapper>
                            <hr></hr>
                            </div>})}
            </ListaWrapper>
        )
    }
}

export default ListaUsuarios