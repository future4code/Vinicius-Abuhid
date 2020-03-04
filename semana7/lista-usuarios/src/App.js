import React from 'react';
import Form from './Components/Form'
import ListaUsuarios from './Components/ListaDeUsuarios'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      mudaDeTela: false,
      telaMostrada: <Form/>
    }
  }

  mudaTela = () => {
    const valor = this.state.mudaDeTela
    this.setState({
      mudaDeTela: !valor
    })
    if (this.state.mudaDeTela){
      this.setState({
        telaMostrada: <Form/>
      })
    }
    else {
      this.setState({
        telaMostrada: <ListaUsuarios/>
      })
    }
  }

  render(){
    const textoDoBotao = this.state.mudaDeTela?  'Cadastrar usuário':'Ver lista de cadastro'
    return (
      <div>
        <button onClick={this.mudaTela}>{textoDoBotao}</button>
        {this.state.telaMostrada}
      </div>
    );
  }
}

export default App;
