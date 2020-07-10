import React from 'react';
import './App.css';
import styled from 'styled-components'

const Conteinerzao = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 10px
`
const Div1 = styled.div`
display: flex;
justify-content: center;
margin-bottom: 10px;
`
const Div2 = styled.div`
display: flex;
justify-content: center;
margin-bottom: 5px;
`
const TituloStyle = styled.h1`
margin:auto;
margin-bottom: 15px
`
const InputStyle = styled.input`
margin-right: 10px
`
const LabelStyle = styled.label`
margin-right: 10px
`

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      novaTarefa: "",
      tarefas: [],
      tarefasBackup: [],
      fezOuNao: ""
    }
  }
  
  guardaValor = (e) => {
    const newTarefa = e.target.value
    this.setState ({
      novaTarefa: newTarefa
    })
  }

  adicionarTarefa = (e) => {
    const novasTarefas = [...this.state.tarefas]
    novasTarefas.push({ texto: this.state.novaTarefa, completa: false, id: Date.now()})
    
    this.setState({
      tarefas: novasTarefas
    })
    this.setState({
      tarefasBackup: novasTarefas
    })
  }

  riscarTarefa = (a) => {
    let tarefasFeitas = [...this.state.tarefas]
    let indiceDaTarefa = tarefasFeitas.indexOf(a)
    let tarefaASerChecada = tarefasFeitas[indiceDaTarefa]
    tarefaASerChecada.completa = !tarefaASerChecada.completa
    tarefasFeitas[indiceDaTarefa] = tarefaASerChecada
    this.setState({
      tarefas: tarefasFeitas
    })
  }

  filtraLista = (e) => {
    if (e.target.value === "Pendentes"){
      let pendentes = [...this.state.tarefasBackup]
      let filtroPendentes = pendentes.filter((item, index)=>{
        return(item.completa === false)
      })
      this.setState({
        tarefas:filtroPendentes
      })
    }
    else if (e.target.value === "Completas"){
      let completas = [...this.state.tarefasBackup]
      let filtroCompletas = completas.filter((item, index)=>{
        return(item.completa === true)
      })
      this.setState({
        tarefas:filtroCompletas
      })
    }
    else {
      this.setState({
        tarefas: this.state.tarefasBackup
      })
    }
  }

  render(){ 
    let listaDeTarefas = this.state.tarefas.map((item, index) => {
      return(<li key={index} onClick={() => {this.riscarTarefa(item)}}>{item.texto}</li>)
    })
    
    listaDeTarefas = this.state.tarefas.map((i, index) => {
      if(i.completa) {
        return(<li key={index} onClick={() => {this.riscarTarefa(i)}}><s>{i.texto}</s></li>)
      }
      else {
        return (<li key={index} onClick={() => {this.riscarTarefa(i)}}>{i.texto}</li>)
      }
    })
    
    return (
      <div>
        <Conteinerzao>
        <TituloStyle>Lista de tarefas</TituloStyle>
        <Div1>
        <InputStyle type="text" onChange={this.guardaValor} />
        <button onClick={this.adicionarTarefa}>Adicionar tarefa</button>
        </Div1>
        <Div2>
        <LabelStyle>Filtro</LabelStyle>
        <select onChange={this.filtraLista}>
        <option value="false">Nenhum</option>
        <option value="Pendentes">Pendentes</option>
        <option value="Completas">Completas</option>
        </select>
        </Div2>
        <ul>
        {listaDeTarefas}
        </ul>
        </Conteinerzao>
      </div>
    );
  }
}

export default App;

