import axios from 'axios'

export const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/generic/planner-sagan-vinicius'

export const getList = (taskList) => {
    return{
        type: 'GET_LIST',
        payload : {
            taskList
        }
    }
}

export const getTaskList = () => async(dispatch) => {
    try{
        const result = await axios.get(baseURL)
        console.log(result.data)
        dispatch(getList(result.data))
    }
    catch(error){
        console.log(error)
    }
}

export const addNewTask = (taskInfo) => async(dispatch) => {
    try{
        const result = await axios.post(baseURL, taskInfo)
        console.log(result.data)
        dispatch(getTaskList())
    }
    catch(error){
        console.log(error)
    }
}