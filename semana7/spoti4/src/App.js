import React from 'react';
import Header from './Components/Header';
import Form from './Components/Form'
import axios from 'axios'
import CadaPL from './Components/CadaPL';
import styled from 'styled-components'
import music from './Assets/music.png'
import Footer from './Components/Footer';
import audio from './Assets/audio.png'


const ListaContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Styledimg = styled.img`
  width: 40%;
  height: 40%;
`
const UlWrapper = styled.ul`
  list-decoration: none;
  text-align: center;
  list-style-image: url(${audio})
`

const WrapperGeral = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  font-family: 'Roboto', sans-serif;
  position: relative
`

const baseURL = 'https://us-central1-spotif4.cloudfunctions.net/api'

class App extends React.Component{
  constructor(props){
      super(props)
      this.state = {
          listaDasPLs : [],
      }
  }

  componentDidMount(){
      this.pegaPLs()
  }

  pegaPLs = ()=> {
      const allPLsPromise = axios.get(`${baseURL}/playlists/getAllPlaylists`, {headers: {
          auth: 'string'
      }})
      allPLsPromise.then((response) => {
        console.log(response.data)
        this.setState({
          listaDasPLs: response.data.result.list
        })
      }).catch(error => {
          console.log(error)
        })
  }

  deletaPL = (idPL)=> {
    const deletarPromessa = 
    axios.delete(`${baseURL}/playlists/deletePlaylist?playlistId=${idPL}`,{
      headers: {auth: 'string'}
    })
    deletarPromessa.then((response) => {
      console.log(response.data)
      this.pegaPLs()
      alert("Playlist removida com sucesso")
  }).catch(error => {
      console.log(error)
      alert("Desculpe, não foi possível remover esta playlist. Tente novamente mais tarde...")
  })
  }

  visualizarMusicas = (idPL) => {
    const musicasPLPromise = axios.get(`${baseURL}/playlists/getPlaylistMusics/${idPL}`, 
      {headers: {auth: 'string'}}
      )
    musicasPLPromise.then(response => {
      console.log(response.data.result.musics)
    }).catch(error => {
      console.log(error)
    })
  }

  render(){
    const listaAuxiliar = this.state.listaDasPLs
    const listaAtualizada = listaAuxiliar.length === 0 ? 
    "Desculpe, não há nenhuma playlist cadastrada aé o momento... =("
    : listaAuxiliar.map((pl)=> {
      return  <li key={pl.id}>
                <CadaPL 
                nomePL={pl.name}
                verMusicas = {()=> this.visualizarMusicas(pl.id)}
                apagaPL = {()=> this.deletaPL(pl.id)}
                ></CadaPL>
              </li>
    })
    return (
      <div>
        <head>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>
        </head>
        <WrapperGeral>
          <Header/>
          <Form newPL={this.pegaPLs}/>
            <ListaContainer>
            <UlWrapper>
              <h3>Minhas playlists</h3>
              {listaAtualizada}
            </UlWrapper>
            <Styledimg src={music}/>
          </ListaContainer>
          <Footer/>
        </WrapperGeral>
      </div>
    )
  }
}

export default App;
