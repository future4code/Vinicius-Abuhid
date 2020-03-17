import React from 'react';
import TaskList from './Components/TaskList';
import styled from 'styled-components';
import {createStore} from 'redux';
import rootReducer from './Reducers/index';
import { Provider } from "react-redux";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const store = createStore(rootReducer);

function App() {
  
  return (
    <Provider store={store}>
      <MainWrapper>
        <h1>4Task</h1>
        <TaskList/>
      </MainWrapper>
    </Provider>
  );
}

export default App;
