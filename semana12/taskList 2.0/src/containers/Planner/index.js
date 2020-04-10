import React from "react";
import { connect } from "react-redux";
import AddNewTaskBar from '../../components/addNewTaskBar'
import styled from 'styled-components'
import {getTaskList, addNewTask} from '../../actions/actions'

const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 90%;
  align-self: center;
  padding: 10px
`

const DayCard = styled.div`
  border: solid black 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px
`
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%
`

export class Planner extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      userInfo: {}
    }
  }

  componentDidMount(){
    this.props.getAllTasks()
  }

  getUserInfo = (e)=> {
    const { name, value } = e.target;
    this.setState({
      userInfo: { ...this.state.userInfo, [name]:value }
    })
  }

  submitTask = (e) =>{
    e.preventDefault();
    this.props.sendNewTask(this.state.userInfo) 
  }

  render() {
  const weekDays = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira',
  'Sábado', 'Domingo']
    return(
      <ContentWrapper>
        <AddNewTaskBar
        saveInfo={this.getUserInfo}
        taskValue={this.state.userInfo.text || ''}
        chosenDayValue={this.state.userInfo.day || ''}
        submitInfo={this.submitTask}
        />
        <Table>
          {weekDays.map( (day, index) => {
          return  <DayCard key={index}>
                    <h2>{day}</h2>
                    <ul>
                    {this.props.taskList.map(task =>{
                    if(task.day === day){
                    return <li key={task.id}>{task.text}</li>}
                    })}
                    </ul>
                  </DayCard>})
          }
        </Table>
      </ContentWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    taskList: state.tasks.taskList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllTasks: () => dispatch(getTaskList()),
    sendNewTask: (taskInfo) => dispatch(addNewTask(taskInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Planner);
