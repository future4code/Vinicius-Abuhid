import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';

function Task(props){
    return(
        <div>
            <li><Checkbox
                onClick = {props.taskDone}
                />
                {props.eachTask}
            </li>
        </div>
    )
}

export default Task