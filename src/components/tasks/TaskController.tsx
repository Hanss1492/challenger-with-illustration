import { useDispatch } from 'react-redux';
import { addTask as addTaskAction, deleteTask as deleteTaskAction } from '../../redux/actions';

export const useTaskController = () => {
  const dispatch = useDispatch();

  const addTask = (description: string) => {
    if (description.trim() !== '') {
      dispatch(addTaskAction(description));
    }
  };

  const deleteTask = (index: number) => {
    dispatch(deleteTaskAction(index));
  };

  return { addTask, deleteTask };
};
