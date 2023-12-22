import { combineReducers } from '@reduxjs/toolkit';
import tasksReducer from './tasksReducer';

// Combina todos los reducers 
const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;