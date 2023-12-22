// Tasks.tsx

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useTaskController } from './TaskController';
import {useTaskStyles}  from './Tasks.styles';

const Tasks = () => {
  const [newDescription, setNewDescription] = useState('');
  const tasks = useSelector((state: RootState) => state.tasks);
  const classes = useTaskStyles(); // estilos

  const { addTask, deleteTask } = useTaskController(); // controlador

  const handleAddTask = () => {
    addTask(newDescription);
    setNewDescription('');
  };

  return (
    <div className={classes.root}>
      <h2>Tasks</h2>
      <ul className={classes.taskList}>
        {tasks.map((task, index) => (
          <li key={index} className={classes.taskItem}>
            <span className={classes.taskDescription}>{task.description}</span>
            <button onClick={() => deleteTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newDescription}
        placeholder="Descripción de la tarea"
        onChange={(e) => setNewDescription(e.target.value)}
        className={classes.input}
      />
      <button onClick={handleAddTask} className={classes.addButton}>
        Agregar
      </button>
    </div>
  );
};

export default Tasks;
