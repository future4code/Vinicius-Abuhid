const initialState = {
    newTask: "",
    scratchedTask: ""
  };

const task = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TASK":
        return { ...state, newTask: action.payload.newTaskName};
        case 'SCRATCH_ACTION':
        return  { ...state, newTask: action.payload.scrachedTask};
      default:
        return state;
    }
  };
  
  export default task;