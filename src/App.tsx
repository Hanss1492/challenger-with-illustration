import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ToolbarDefault from "./components/toolbar/ToolbarDefault";
import FooterDefault from "./components/copyright/FooterDefault";
import { Provider } from "react-redux";
import store from "./redux/store";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Define el nuevo color en formato de Material-UI
const theme = createTheme({
  palette: {
    primary: {
      main: "#ffcdb2", // Cambia el color principal al deseado
    },
  },
});

// Containers
//const DefaultLayout = React.lazy(() => import("./layout/Layout"));

// Pages
const HomePage = React.lazy(() => import("./views/pages/home/Home"));
const Tasks = React.lazy(() => import("./views/pages/task/TaskPage"));
const Listado = React.lazy(() => import("./views/pages/listado/ListadoPage"));

function App() {
  return (
    <Provider store={store}>  
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ToolbarDefault />
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/listado" element={<Listado />} />
          </Routes>
        </Suspense>
        <FooterDefault />
      </Router>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
