import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useTaskController } from "./TaskController";
import {
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const Tasks = () => {
  const [newDescription, setNewDescription] = useState("");
  const tasks = useSelector((state: RootState) => state.tasks);
  const taskCount = tasks.length; // Contador de tareas
  const { addTask, deleteTask } = useTaskController();

  const handleAddTask = () => {
    addTask(newDescription);
    setNewDescription("");
  };

  return (
    <Paper
      style={{
        maxWidth: 500,
        margin: "auto",
        padding: 20,
        border: "1px solid #ccc",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Tareas ({taskCount})
      </Typography>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText primary={task.description} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteTask(index)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <div style={{ display: "flex", marginBottom: 10 }}>
        <TextField
          label="Descripción de la tarea"
          variant="outlined"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          style={{ flex: 1, marginRight: 10 }}
        />
        <Button
          variant="contained"
          onClick={handleAddTask}
          endIcon={<AddIcon />}
          style={{ width: 120 }}
        >
          Agregar
        </Button>
      </div>
    </Paper>
  );
};

export default Tasks;
