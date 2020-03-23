import axios from 'axios'

export const addTask = (text)=> {
   return {type: 'ADD_TASK',
    payload: {
        text
    }}
}

export const completeAllTask = ()=> {
    return {type: 'COMPLETE_ALL_TASK'}
}

export const setFilter = (filter)=> {
    return {type: 'SET_FILTER',
        payload: {
            filter
        }
    }
}
const updateList = (list) => {
    return{
        type: 'UPDATE_LIST',
        payload :{
            list
        }
    }
}

export const createTask = text => async (dispatch, getState) => {
    const newTask = {
        text
    }
    const result = await axios.post(
        'https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/vinicius/todos',
        newTask
    )
    dispatch(
        addTask(
          result.data.todo.text
        )
      );
};

export const showTasks = () => async (dispatch, getState) => {
    const result = await axios.get(
        'https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/vinicius/todos'
    )
    dispatch(
        updateList(
          result.data
        )
      );
};

export const doneTask = (id) => async(dispatch, getState) => {
    const result = await axios.put(
        `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/vinicius/todos/${id}/toggle`
    )
    dispatch(showTasks())
}

export const deleteCompletedTasks = () => async (dispatch, getState) => {
    const result = await axios.delete(
        'https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/vinicius/todos/delete-done'
    )
    dispatch(showTasks())
}

export const deleteOnlyOneTask = (id) => async (dispatch, getState) => {
    const result = await axios.delete(
        `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/vinicius/todos/${id}`
    )
    dispatch(showTasks())
}