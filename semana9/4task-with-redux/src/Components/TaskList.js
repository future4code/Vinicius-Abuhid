import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components'
import AddTask from './AddTask'
import Filter from './Filter'

const ListWrapper = styled.ul`
    list-style: none;
`
const ListItemWrapper = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    border: 1px black solid;
    width: 100%;
    height: 40px
`

const TaskList = () => {
    return(
        <div>
            <ListWrapper>
                <ListItemWrapper>
                    <AddTask/>
                </ListItemWrapper>
                <ListItemWrapper>
                    <Checkbox></Checkbox>
                    <p>Use React</p>  
                </ListItemWrapper>
                <ListItemWrapper>
                    <Filter/>
                </ListItemWrapper>
            </ListWrapper>
        </div>
    )
}

export default TaskList