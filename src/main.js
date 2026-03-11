import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import App from "./App.js";
import { HelmetProvider } from "react-helmet-async";
import { DISTheme } from "./theme/theme.js";
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(HelmetProvider, { children: _jsxs(ThemeProvider, { theme: DISTheme, children: [_jsx(CssBaseline, {}), _jsx(App, {})] }) }) }));
