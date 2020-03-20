import React from 'react'
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox'
import { connect } from 'react-redux'
import { showTasks, doneTask, deleteOnlyOneTask } from '../actions/index'

const LiWrapper = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 40%
`

class TaskList extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            completedTask: false
        }
    }
    
    componentDidMount(){
        this.props.getTheList()
    }

    toggleTask = (id) => {
        this.props.taskListChange(id)
    }

    deleteTask = (id) => {
        this.props.taskListDelete(id)
    }

    render(){
        return(
            <ul>
                {this.props.taskList.filter((task)=> {
                    const filter = this.props.filter
                    if(filter === 'pendentes') {return task.done === false}
                    if(filter === 'completas') {return task.done === true}
                    return true
                }).map((task)=> {
                        if (task.done === false){
                            return  <LiWrapper key ={task.id}>
                                    <div>
                                        <Checkbox onClick={()=> this.toggleTask(task.id)}/>
                                        {task.text}
                                    </div>
                                    <div>
                                        <p onClick={()=>this.deleteTask(task.id)}>x</p>
                                    </div>
                                    </LiWrapper>
                        }
                        else {
                            return  <LiWrapper key ={task.id}>
                                    <div>
                                        <Checkbox onClick={()=> this.toggleTask(task.id)}/>
                                        <s>{task.text}</s>
                                    </div>
                                    <div>
                                        <p onClick={()=>this.deleteTask(task.id)}>x</p>
                                    </div>
                                    </LiWrapper>
                        }
                }
                )}
            </ul>
        )    
    }
}


const mapStateToProps = (state)=> {
    return {
        taskList: state.tasks.taskList,
        filter: state.tasks.filter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTheList: () => {
            dispatch(showTasks())
        },
        taskListChange: taskID => {
            dispatch(doneTask(taskID))
        },
        taskListDelete: taskID => {
            dispatch(deleteOnlyOneTask(taskID))
        }
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(TaskList);
