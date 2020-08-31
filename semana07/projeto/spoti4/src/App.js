import React from 'react';
import Header from './Components/Header';
import Form from './Components/Form'
import axios from 'axios'
import CadaPL from './Components/CadaPL';
import styled from 'styled-components'
import musicw from './Assets/musicwl.png'
import Footer from './Components/Footer';
import audio from './Assets/audio.png'
import PLInfo from './Components/PLInfo';
import FormAddMusic from './Components/FormAddMusic';

const PageWrapper = styled.div`
  min-height: 100vh;
  border: black 1px solid;
  font-family: 'Roboto', sans-serif;
  position: relative;
`
const ListaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 75%
`
const Styledimg = styled.img`
  width: 40%;
  height: 40%;
`
const UlWrapper = styled.ul`
  list-decoration: none;
  text-align: center;
  list-style-image: url(${audio});
  font-weight: bolder;
`
const WrapperGeral = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 50px auto;
  width: 100%;
`
const Audio = styled.audio`
  margin: 5px 0
`

const baseURL = 'https://us-central1-spotif4.cloudfunctions.net/api'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listaDasPLs: [],
      infoPL: "",
      infoPL2: "",
      idPInfo: "",
      listaDeMusicas: "",
      formSendMusic: "",
      idPForm: "",
    }
  }

  componentDidMount() {
    this.pegaPLs()
  }

  pegaPLs = () => {
    const allPLsPromise = axios.get(`${baseURL}/playlists/getAllPlaylists`, {
      headers: {
        auth: 'string'
      }
    })
    allPLsPromise.then((response) => {
      console.log(response.data)
      this.setState({
        listaDasPLs: response.data.result.list
      })
    }).catch(error => {
      console.log(error)
    })
  }

  deletaPL = (idPL) => {
    const deletarPromessa =
      axios.delete(`${baseURL}/playlists/deletePlaylist?playlistId=${idPL}`, {
        headers: { auth: 'string' }
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
    if (idPL === this.state.idPInfo) {
      this.setState({
        idPInfo: "",
        idPForm: ""
      })
    }
    else {
      const musicasPLPromise = axios.get(`${baseURL}/playlists/getPlaylistMusics/${idPL}`,
        { headers: { auth: 'string' } }
      )
      musicasPLPromise.then(response => {
        console.log(response.data.result.musics)
        this.setState({
          idPInfo: idPL,
          listaDeMusicas: response.data.result.musics.map((item, index) => {
            return <p key={index}>{item.name}{" - "}{item.artist}
              <Audio controls src={item.url} type="audio" />
            </p>
          })
        })
      }).catch(error => {
        console.log(error)
      })
    }
  }

  adicionarMusica = (idPL) => {
    this.setState({
      idPForm: idPL
    })

  }

  enviarMusicas = (nome, artista, URL) => {
    const infoMusica = {
      "playlistId": this.state.idPForm,
      "music": {
        "name": nome,
        "artist": artista,
        "url": URL
      }
    }
    const promessaEnvioMusica = axios.put(`${baseURL}/playlists/addMusicToPlaylist`,
      infoMusica, { headers: { auth: 'string' } })
    promessaEnvioMusica.then((response) => {
      console.log(response.data)
      this.setState({
        idPInfo: ""
      })
      this.visualizarMusicas(this.state.idPForm)
    }).catch((error) => {
      console.log(error)
    })
  }

  render() {
    const listaAuxiliar = this.state.listaDasPLs
    const listaAtualizada = listaAuxiliar.length === 0 ?
      "Desculpe, não há nenhuma playlist cadastrada até o momento... =("
      : listaAuxiliar.map((pl) => {
        return <li key={pl.id}>
          <CadaPL
            nomePL={pl.name}
            verMusicas={() => this.visualizarMusicas(pl.id)}
            apagaPL={() => this.deletaPL(pl.id)}
          ></CadaPL>
          {this.state.infoPL = pl.id === this.state.idPInfo ?
            <PLInfo
              musicas={this.state.listaDeMusicas}
              addMusic={() => this.adicionarMusica(pl.id)}
            /> : ""}
          {this.state.formSendMusic = pl.id === this.state.idPForm ?
            <FormAddMusic
              sendMusic={this.enviarMusicas}
            /> : ""}
        </li>
      })
    return (
      <PageWrapper>
        <head>
          <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
        </head>
        <WrapperGeral>
          <Header />
          <Form newPL={this.pegaPLs} />
          <ListaContainer>
            <Styledimg src={musicw}/>
            <UlWrapper>
              <h3>Minhas playlists</h3>
              {listaAtualizada}
            </UlWrapper>
          </ListaContainer>
        </WrapperGeral>
        <Footer />
      </PageWrapper>
    )
  }
}

export default App;
