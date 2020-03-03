import React from 'react'
import styled from 'styled-components'

const ListaWrapper = styled.div`
    margin: 0 auto;
    text-align: center;
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
    }
    render(){
        return(
            <ListaWrapper>
                <h2>Usuários Cadastrados</h2>
                <div>
                    <UsuarioWrapper>
                        <p>Teste</p>
                        <BotaoDeletar>X</BotaoDeletar>
                    </UsuarioWrapper>
                    <hr></hr>
                </div>
            </ListaWrapper>
        )
    }
}

export default ListaUsuarios