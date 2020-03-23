import React from 'react'
import { connect } from 'react-redux';
import {addTask, createTask} from '../actions/index'

class AddTask extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            inputText: ''
        }
    }

    saveTask = (e)=> {
        this.setState({
            inputText: e.target.value
        })
    }

    addNewTask = ()=> {
        this.props.addTask(this.state.inputText)
    }

    render(){
        return(
            <div>
                <input 
                type='text' 
                placeholder='O que tem que ser feito?'
                value = {this.state.inputText}
                onChange={this.saveTask}
                />
                <button
                onClick={this.addNewTask}
                >
                Add task
                </button>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addTask: text => {
            dispatch(createTask(text))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTask);
