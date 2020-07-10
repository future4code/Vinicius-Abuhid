import React from "react";
import { connect } from "react-redux";
import AddNewTaskBar from '../../components/addNewTaskBar'
import styled from 'styled-components'
import {getTaskList, addNewTask} from '../../actions/actions'
import {Paper} from '@material-ui/core'

const Table = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 100%;
    align-self: center;
    padding: 10px;
    border-left: 2px ridge grey;
    border-right: 2px ridge grey;
    height: 85vh;
`

export const DayCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px
`

const ContentWrapper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  width: 70%;
  height: 100vh;
  align-self: center;
  margin: 0 auto;
  border-bottom: 2px ridge grey
`
const PageWrapper = styled.div`
  background: url(https://atualissimotreinamentos.com.br/wp-content/uploads/2018/08/business-wallpaper-hd.jpg);
  background-repeat: no-repeat;
  background-size: auto;
`
export const Li = styled.li`
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
    this.setState({
      userInfo: {}
    })
  }

  render() {
  const weekDays = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira',
  'Sábado', 'Domingo']
    return(
      <PageWrapper>
      <ContentWrapper elevation={3}>
        <AddNewTaskBar
        saveInfo={this.getUserInfo}
        taskValue={this.state.userInfo.text || ''}
        chosenDayValue={this.state.userInfo.day || ''}
        submitInfo={this.submitTask}
        />
        <Table>
          {weekDays.map( (day, index) => {
          return  <DayCard key={index}>
                    <h3>{day}</h3>
                    <ul>
                    {this.props.taskList.map(task =>{
                    if(task.day === day){
                    return <Li key={task.id}>{task.text}</Li>}
                    })}
                    </ul>
                  </DayCard>})
          }
        </Table>
      </ContentWrapper>
      </PageWrapper>
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
