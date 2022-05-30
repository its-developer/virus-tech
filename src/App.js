import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { routes } from "./routes";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Themes";

import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {routes.map((item, i) => {
            if (item.layout != null) {
              return (
                <Route
                  exact
                  path={item.path}
                  element={
                    <item.layout
                      title={item.title}
                      rootStyle={item.rootStyle}
                      hideBox={item.hideBox}
                      element={item.component}
                      rootClasses={item.rootClasses}></item.layout>
                  }
                />
              );
            } else {
              return (
                <Route
                  exact
                  path={item.path}
                  element={<item.component theme={theme} />}
                />
              );
            }
          })}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
