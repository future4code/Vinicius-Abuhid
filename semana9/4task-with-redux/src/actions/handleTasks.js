export const addNewTask = task => {
    return {
      type: "ADD_TASK",
      payload: {
        newTaskName: task.name,
        newTaskID: task.id,
        newTaskDone: false
      }
    };
  };

export const scratchTask = task => {
    return {
        type: 'SCRATCH_ACTION',
        payload: {
            scrachedTask: task
        }
    }
}

export const scratchAllTasks = () => {
    return {
        type: 'SCTRATCH_ALL_ACTIONS'
    }
}

export const deleteCompleteTasks = () => {
    return{
        type: 'DELETE_COMPLETED_TASKS'
    }
}