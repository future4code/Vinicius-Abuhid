import React from 'react'
import styled from 'styled-components'

const Main = styled.div`
display:flex;
width:100%;
justify-content: ${ props => props.lado};
`

const Lado = styled.div`
display:block;
border: 1px solid grey;
border-radius: 5px;
background-color: #D0CFC8;
margin-bottom: 1%;
margin-right: 1%;
margin-left: 1%;
padding-left: 1%;
padding-right: 1%;
padding-top:3%;
padding-bottom:3%;
box-shadow: 0px 1px 5px 0px black;
`

const MensagemTexto = styled.div`
width: 100%;
margin-top: auto;
margin-bottom:auto;
`

const Nome = styled.p`
width: 100%;
margin-top: 0;
margin-bottom: 0;
font-weight: bold;
display: ${props => props.lado};
`

class Mensagem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            eu: false,
            excluir: 0
        }
    }
    render() {
        return (
            <Main onDoubleClick={this.props.apagar} lado={(props) => {
                if (this.props.usuario === "eu") {
                    return "flex-end"
                }
                else {
                    return "flex-start"
                }
            }}>
                <Lado>
                    <Nome lado={(props) => {
                        if (this.props.usuario === "eu") {
                            return "none"
                        }
                        else {
                            return "block"
                        }
                    }} >{this.props.usuario}</Nome>
                    <MensagemTexto>
                        {this.props.mensagem}
                    </MensagemTexto>
                </Lado>
            </Main>
        )
    }
}

export default Mensagem