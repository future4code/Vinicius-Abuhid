// actions = alterações no estado global
// create action = função que vai pegar informações do componente, por meio do connect e levar
//ao reducer por meio do dispatch
export const addTask = (text)=> {
   return {type: 'ADD_TASK',
    payload: {
        text
    }}
}

// const toggleTask = (id)=> {
//     return {type: 'TOGGLE_TASK',
//      payload: {
//          id
//      }}
// }

// const addTask = (text)=> {
//     return {type: 'ADD_TASK',
//      payload: {
//          text
//      }}
// }

// const deleteTask = (id)=> {
//     return {type: 'DELETE_TASK',
//      payload: {
//          id
//      }}
// }

// const completeAllTask = (text)=> {
//     return {type: 'COMPLETE_ALL_TASK'}
// }

// const deleteAllComplete = (text)=> {
//     return {type: 'DELETE_ALL_COMPLETE'}
// }

// const setFilter = (filter)=> {
//     return {type: 'SET_FILTER',
//      payload: {
//          filter
//      }}
// }
