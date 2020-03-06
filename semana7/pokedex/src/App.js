import React from 'react';
import axios from 'axios'
import PokeComponente from './PokeComponente';
import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px
`
const PokeInput = styled.input`
  width: 200px;
  margin-right: 5px
`

const Pokebola = styled.img`
  width: 40px;
  height: 40px
`

const PokebolaWrapper = styled.div`
  display: flex;
  align-items: center
`

const ContainerGeral = styled.div`
  width:60%;
  margin: 0 auto
`

const baseURL = "https://pokeapi.co/api/v2"

class Pokedex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      listaPokemons: [],
      pesquisa: "",
      name: "",
      sprite: "",
      numero: "",
      tipo: "",
      pokeTela: false
    }
  }

  componentDidMount(){
    this.importaPokemons()
  }

  importaPokemons = () => {
    const Pokepromessa = axios.get(`${baseURL}/pokemon?limit=151`)

    Pokepromessa.then((response)=> {
      console.log(response.data.results)
      this.setState({ listaPokemons: response.data.results 
      })
    }).catch((error) => {
      console.log(error)
    })
    
  }

  salvaNome = (e) => {
    let pokePesquisa = e.target.value
    this.setState ({
      pesquisa: pokePesquisa
    })
  }

  buscaPokemon = () => {
    if (this.state.pesquisa === ""){
      alert("Você deve digitar o nome de um pokémon para pesquisar")
    }
    else {
    const pokeFiltro = this.state.listaPokemons.find((pokemon)=> {
      return pokemon.name === this.state.pesquisa
    })
    const pokeLink = pokeFiltro? pokeFiltro.url : ""
    const Pokepromessa = axios.get(pokeLink)
    Pokepromessa.then((response)=> {
      let filtroTipo = response.data.types
      filtroTipo = filtroTipo.find((item)=> {
        return item
      })
      filtroTipo = filtroTipo.type
      filtroTipo = filtroTipo.name
      this.setState({
        name: response.data.name,
        sprite: response.data.sprites.front_default,
        numero: response.data.id,
        tipo: filtroTipo,
        pokeTela: true
      })
    }).catch((error) => {
      alert("O pokémon pesquisado não existe em nossos dados...")
      console.log(error)
    })
    this.setState({
      pesquisa: ""
    })}
  }

  render(){
    return(
      <ContainerGeral>
        <Header>
          <div>
            <PokeInput type="text" 
            placeholder="Digite o nome de um pokémon..."
            value = {this.state.pesquisa} 
            onChange={this.salvaNome}/>
            <button
            onClick ={this.buscaPokemon}
            >Pesquisar</button>
          </div>
          <PokebolaWrapper>
            <h3>Pokédex</h3>
            <Pokebola src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDKsN2bPhSs_pz53wGHuAXz3ri3dgK1fjPj6tH05Gwixp3vgrO'}
            alt ="pokebola"/>
          </PokebolaWrapper>
        </Header>
        <hr/>
        {this.state.pokeTela && <PokeComponente 
        pokenome={this.state.name}
        pokeimg={this.state.sprite}
        pokenumero={this.state.numero}
        poketipo={this.state.tipo}
        />}
      </ContainerGeral>
    )
  }

}
export default Pokedex;
