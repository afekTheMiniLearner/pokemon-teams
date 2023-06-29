import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import App from "./App";
import "./index.scss";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 509,
      sm: 767,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
