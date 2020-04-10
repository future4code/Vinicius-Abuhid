const initialState = {
    taskList: []
}

const tasks = (state = initialState, action) => {
    switch(action.type){
        case 'GET_LIST':
        return{
            ...state, taskList: action.payload.taskList 
        }
        default:
            return state
        }
}

export default tasks
