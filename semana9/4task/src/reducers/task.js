const initialState = {
    taskList: [{
        id: 1,
        text: 'Use Redeux',
        complete: false
    }]
}

export const tasks = (state=initialState, action)=>{
    switch(action.type){
        case 'ADD_TASK':
            const newTask = {
                id: Date.now(),
                text: action.payload.text,
                complete: false
            };
            console.log(action.payload.text)
            return {
                taskList: [newTask, ...state.taskList]}
        default: 
        return state
    }
}