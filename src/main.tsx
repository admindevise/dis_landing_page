import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App.js";
import { HelmetProvider } from "react-helmet-async";
import { DISTheme } from "./theme/theme.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={DISTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
