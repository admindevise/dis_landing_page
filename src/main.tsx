import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { DISTheme } from "./theme/theme";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./styles/landing-base.css";
import "./styles/landing-sections.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider theme={DISTheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
