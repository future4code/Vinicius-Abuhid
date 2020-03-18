import React from 'react'
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox'
import { connect } from 'react-redux'

const TaskList = (props)=> {
    return(
        <ul>
            {props.taskList.map((task)=> (
                    <li key ={task.id}>
                        {task.text}
                        <Checkbox/>
                    </li>
            ))}
        </ul>
    )
}

const mapStateToProps = (state)=> {
    return {
        taskList: state.tasks.taskList
    }
}

export default  connect(mapStateToProps)(TaskList);

//o mapStateToProps serve para trazer informações do estado para o componente. O return dele
// vai ser a informação do estado que por meio de props vai ser reaproveitado pelo componente