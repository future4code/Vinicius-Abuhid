import React from 'react'

function InputNewTask(props) {
        return(
            <div>
                <input 
                type='text'
                onChange={props.saveTask}
                placeholder="O que tem que ser feito?"
                value={props.newOne}
                onKeyPress={props.addTask}>
                </input>
            </div>
        )
}

export default InputNewTask;