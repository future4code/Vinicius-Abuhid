import React from 'react';
import './App.css';
import Post from './Post/Post';
import Formulario from './Formulario/Formulario';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [{
        fotoPerfil: 'https://external-preview.redd.it/R8u9Pqwc-Wy-N8pmO6-XSfJZhFjdWarWkTdFmgN5Lew.png?auto=webp&s=2462de9a22c26568e1a469f2477d9e1c5097aab1',
        username: 'Johnny',
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Pequena_montanha_de_pedra.jpg'
      }]
    }
  }

  onCriaPost = (novoPost) => {
    console.log('NOVO POST', novoPost)
  }

  render() {
    const listaDePost = this.state.posts.map((cadaPost) => {
      return <Post imgautor={cadaPost.fotoPerfil} autordopost={cadaPost.username} imagempost={cadaPost.imagem}/>
    })

    return (
      <div>
      <Formulario onCriaPost={this.onCriaPost} />
      {listaDePost}
      </div>
    );
  }
}

export default App;
