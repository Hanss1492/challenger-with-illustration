import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ToolbarDefault from "../components/toolbar/ToolbarDefault";
import HomePage from "../views/pages/home/Home";
import FooterDefault from "../components/copyright/FooterDefault";

//Define el nuevo color en formato de Material-UI
const theme = createTheme({
  palette: {
    primary: {
      main: "#ffcdb2", // Cambia el color principal al deseado
    },
  },
});

// const defaultTheme = createTheme();

const Layout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToolbarDefault />
      <HomePage />
      <FooterDefault />
    </ThemeProvider>
  );
};

export default Layout;
