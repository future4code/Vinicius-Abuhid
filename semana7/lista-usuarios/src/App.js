import React from 'react';
import Form from './Components/Form'
import ListaUsuarios from './Components/ListaDeUsuarios'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      usuario: [
        {
          email: "",
          id: "",
          name: ""
          
        }
      ]
    }
  }

  render(){
    return (
      <div>
        <button>Olá</button>
        <Form/>
        <ListaUsuarios/>
      </div>
    );
  }
}

export default App;
