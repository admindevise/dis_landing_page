import { createTheme } from '@mui/material/styles';

export const DISTheme = createTheme({
  palette: {
    primary: {
      light: "#4FD8D8",
      main: "#02B2B2",
      dark: "#007E82",
      contrastText: "#FFFFFF"
    },
    secondary: {
      light: "#27445A",
      main: "#192B3B",
      dark: "#0F1C27",
      contrastText: "#FFFFFF"
    },
    info: {
      light: "#42C9FF",
      main: "#1FA2FF",
      dark: "#0A6CB8",
      contrastText: "#FFFFFF"
    },
    background: {
      default: "#192B3B",
      paper: "#1F3A4D"
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0C4D4"
    }
  },
  typography: {
    fontFamily: "var(--font-body)",
    h1: {
      fontFamily: "var(--font-display)",
      fontWeight: 700
    },
    h2: {
      fontFamily: "var(--font-display)",
      fontWeight: 600
    },
    h3: {
      fontFamily: "var(--font-display)",
      fontWeight: 600
    },
    body1: {
      fontWeight: 400
    },
    button: {
      fontFamily: "var(--font-ui)",
      fontWeight: 600,
      textTransform: "none"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          padding: "10px 24px"
        }
      }
    }
  }
});
