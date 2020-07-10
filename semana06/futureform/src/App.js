import React from 'react';
import Formulario1 from './Componentes/Formulario1';
import styled from 'styled-components';
import './App.css';
import Formulario2 from './Componentes/Formulario2';
import Formulario3 from './Componentes/Formulario3';
import Formulario4 from './Componentes/Formulario4';

const ComponenteGeral = styled.div`
display: flex;
justify-content: center;
`

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      formulario: <Formulario1 funcao = {this.passaPraEtapa2}></Formulario1>
    }
  }


  passaPraEtapa2 = (e) =>{
    this.setState({
      formulario: <Formulario2 funcao2={this.passaPraEtapa3}/>
    })
  }

  passaPraEtapa3 = (e) =>{
    this.setState({
      formulario: <Formulario3 funcao3={this.passaPraEtapa4}/>
    })
  }
  
  passaPraEtapa4 = (e) =>{
    this.setState({
      formulario: <Formulario4/>
    })
  }

  render(){
    return (
      <ComponenteGeral>
        {this.state.formulario}
      </ComponenteGeral>
    );
  }
}

export default App;
