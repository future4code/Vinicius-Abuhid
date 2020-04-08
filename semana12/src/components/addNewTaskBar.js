import React from 'react'

class AddNewTaskBar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.props.submitInfo}>
                    <h3>Adicionar nova tarefa</h3>
                    <input
                    type='text' 
                    placeholder='escreva a nova tarefa aqui' 
                    onChange={this.props.saveInfo}
                    value={this.props.taskValue}
                    name='text'
                    />
                    <select 
                    onChange={this.props.saveInfo}
                    value={this.props.chosenDayValue}
                    name='day'
                    >
                        <option>Selecione o dia da semana</option>
                        <option>Segunda-feira</option>
                        <option>Terça-feira</option>
                        <option>Quarta-feira</option>
                        <option>Quinta-feira</option>
                        <option>Sexta-feira</option>
                    </select>
                    <button type='onSubmmit'>Adicionar</button>
                </form>
            </div>
        )
    }
}

export default AddNewTaskBar;