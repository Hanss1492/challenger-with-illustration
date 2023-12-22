
export const ActionTypes = {
  ADD_TASK: 'ADD_TASK',
  DELETE_TASK: 'DELETE_TASK',
};

export const addTask = (description: string) => ({
  type: ActionTypes.ADD_TASK,
  payload: description,
});

export const deleteTask = (index: number) => ({
  type: ActionTypes.DELETE_TASK,
  payload: index,
});
