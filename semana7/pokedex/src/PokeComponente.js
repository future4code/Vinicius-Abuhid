import React from 'react'
import styled from 'styled-components'

const ImgWrapper = styled.img`
    border: dotted 1px grey
`

const PokemonWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center
`

class PokeComponente extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const nome = this.props.pokenome.toUpperCase()
        return(
            <PokemonWrapper>
                <h2>{nome}</h2>
                <ImgWrapper src={this.props.pokeimg} alt="Temos que pegar"/>
                <p>Número: {this.props.pokenumero}</p>
                <p>Tipo: {this.props.poketipo}</p>
            </PokemonWrapper>
        )
    }
}

export default PokeComponente;