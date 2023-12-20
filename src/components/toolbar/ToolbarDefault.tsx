import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Logo from "../../Assets/images/logonew.png";

const ToolbarDefault = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        {/* Esto empujará el logo hacia la derecha */}
        <img
          src={Logo}
          alt="Logo"
          style={{ marginLeft: "25px", maxHeight: "80px" }}
        />
        {/* Menús */}
        <Box>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/tasks" color="inherit">
            Tareas
          </Button>
          <Button component={Link} to="/listado" color="inherit">
            Listado de Tareas
          </Button>
        </Box>
        {/* Logo */}
        <Box sx={{ flexGrow: 1 }} />{" "}
      </Toolbar>
    </AppBar>
  );
};

export default ToolbarDefault;
