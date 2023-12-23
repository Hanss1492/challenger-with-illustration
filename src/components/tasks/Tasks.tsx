import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { TasksController } from "./TasksController";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

// Importa los estilos desde tasksStles
import { paperStyle, addButtonStyle, dialogStyle } from "./TasksStyles"; 

const Tasks = () => {
  const [newDescription, setNewDescription] = useState("");
  const [open, setOpen] = useState(false);
  const tasks = useSelector((state: RootState) => state.tasks);
  const taskCount = tasks.length;
  const { addTask, deleteTask } = TasksController();

  const handleAddTask = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateTask = () => {
    if (newDescription.trim() !== "") {
      addTask(newDescription);
      setNewDescription("");
      setOpen(false);
    }
  };

  return (
    <Paper style={paperStyle}>
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
      <div style={dialogStyle}>
        <Button
          variant="contained"
          onClick={handleAddTask}
          endIcon={<AddIcon />}
          style={addButtonStyle}
        >
          Agregar
        </Button>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Nueva Tarea</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Descripción de la tarea"
            type="text"
            fullWidth
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            error={newDescription.trim() === ""}
            helperText={
              newDescription.trim() === "" ? "*El campo es obligatorio" : ""
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleCreateTask}>Crear</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default Tasks;
