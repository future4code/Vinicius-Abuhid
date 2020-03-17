import { combineReducers } from "redux";
import task from "./tasks";

const rootReducer = combineReducers({
  tasks: task
});

export default rootReducer;
