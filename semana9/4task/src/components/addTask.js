import React from 'react'
import { connect } from 'react-redux';
import {addTask} from '../actions/index'

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

const mapStateToProps = (state)=> {
    
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: text => {
            const action = addTask(text)
            dispatch(action)}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);

//O onClick é conectado ao estado por meio do connect. O connect dá esse acesso por meio das
// das variáveis mapStateToProps, mapDispatchToProps que recebem props. Aí, por essas props
// o componente pode passar o que quiser para o estado e interagir com ele. Porém, se a intenção
// for de alterar o estado, tem que chamar o dispatch que dá o acesso ao reducer que verifica se as
// informações são necessárias ou não para alterar o estado