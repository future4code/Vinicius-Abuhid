import React from "react";
import { connect } from "react-redux";
import AddNewTaskBar from '../../components/addNewTaskBar'
import styled from 'styled-components'
import {getTaskList, addNewTask} from '../../actions/actions'

const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 20%);
`

const DayCard = styled.div`
  border: solid black 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

class Planner extends React.Component {
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
    const weekDays = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira']
    // const mondayTasks = this.props.taskList.filter(task =>{
    //   return task.day = 'Segunda-feira'
    // })
    // const tuesdayTasks = this.props.taskList.filter(task =>{
    //   return task.day = 'Terça-feira'
    // })
    // const wednesdayTasks = this.props.taskList.filter(task =>{
    //   return task.day = 'Quarta-feira'
    // })
    // const thursdayTasks = this.props.taskList.filter(task =>{
    //   return task.day = 'Quinta-feira'
    // })
    // const fridayTasks = this.props.taskList.filter(task =>{
    //   return task.day = 'Sexta-feira'
    // })
    // console.log(fridayTasks)
    return(
      <div>
        <AddNewTaskBar
        saveInfo={this.getUserInfo}
        taskValue={this.state.userInfo.text || ''}
        chosenDayValue={this.state.userInfo.day || ''}
        submitInfo={this.submitTask}
        />
        <Table>
          {weekDays.map( day => {
          return  <DayCard>
                    <h2>{day}</h2>
                    <ul>
                    {this.props.taskList.map(task =>{
                    if(task.day === day){
                    return <li>{task.text}</li>}
                    })}
                    </ul>
                  </DayCard>})
          }
        </Table>
      </div>
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
