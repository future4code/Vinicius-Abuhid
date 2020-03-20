import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ToolBar from './components/toolbar';
import styled from 'styled-components'
import TaskList from './components/taskList';
import AddTask from './components/addTask';
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto
`

const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <MainWrapper>
        <h1>4Task</h1>
        <AddTask/>
        <TaskList/>
        <ToolBar/>
      </MainWrapper>
    </Provider>
  );
}

export default App;
