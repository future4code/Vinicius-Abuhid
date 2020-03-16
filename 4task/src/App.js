import React from 'react';
import InputNewTask from './Components/InputNewTask'
import Task from './Components/Tarefa';
import styled from 'styled-components'
import Filter from './Components/Filter'
import { StylesProvider } from '@material-ui/core';

const StyledList = styled.ul`
  list-style: none;
`
const MainWrapper = styled.main`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
`
const LiWrapper = styled.li`
  width: 800px;
`

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      taskList: [],
      taskName: "",
    }
  }

  saveTask = (e) => {
     this.setState({taskName: e.target.value
    })
  }

  addTask = (e)=> {
      if(e.key === 'Enter'){
        console.log(this.state.taskName)
        let newObject = {name: this.state.taskName,
            id: "",
            done: false
            }
        let alltasks = [...this.state.taskList]
        alltasks.push(newObject)
        this.setState({
          taskList: alltasks,
          taskName: ""
        })
      }
  }


  render(){
    let completeList = this.state.taskList.map((item, index)=> {
      return <Task eachTask={item.name} key={index}/>
    })
  return (
    <div>
      <MainWrapper>
        <h1>4Task</h1>
        <StyledList>
        <LiWrapper>
        <InputNewTask
        newOne = {this.state.taskName}
        saveTask ={this.saveTask}
        addTask ={this.addTask}
        />
        </LiWrapper>
          {completeList}
        <LiWrapper>
          <Filter/>
        </LiWrapper>
        </StyledList>
      </MainWrapper>
    </div>
  );}
}

export default App;
