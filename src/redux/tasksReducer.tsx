import { createReducer } from '@reduxjs/toolkit';
import { ActionTypes } from './actions';

interface Task {
  description: string;
}

// Define el estado inicial
const initialState: Task[] = [];

// Define el reducer para los tasks utilizando createReducer de Redux Toolkit
const tasksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ActionTypes.ADD_TASK, (state, action : any) => {
      state.push({ description: action.payload });
    })
    .addCase(ActionTypes.DELETE_TASK, (state, action : any) => {
      state.splice(action.payload, 1);
    });
});

export default tasksReducer;
