const initialState = {
    taskList: [{
        id: 1,
        text: 'Use Redux',
        done: false
    }],
    filter: 'todas'
}

export const tasks = (state=initialState, action)=>{
    switch(action.type){
        case 'ADD_TASK':
            const newTask = {
                id: Date.now(),
                text: action.payload.text,
                done: false
            };
            return {
                ...state,
                taskList: [newTask, ...state.taskList]}
        case 'COMPLETE_ALL_TASK':
            console.log('djn')
            const completedTasks = [...state.taskList]
            completedTasks.map((task)=> {
               return task.done = true
            })
            console.log(completedTasks)
            return {
                ...state,
                taskList: completedTasks
            }
        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload.filter
            }
        case 'UPDATE_LIST':
            console.log(action.payload.list.todos)
            return {
                ...state,
                taskList: action.payload.list.todos
            }
        default: 
        return state
    }
}