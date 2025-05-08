import { createTheme } from "@mui/material/styles";

const shadowContrastTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6E5FEA", // Electric violet
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#2D1B66", // Deep indigo
      contrastText: "#ffffff",
    },
    background: {
      default: "#F5F6FA", // Light neutral background
      paper: "#ffffff", // Clean white for cards
    },
    text: {
      primary: "#1A1A2E", // Deep near-black
      secondary: "#5A5A89", // Muted indigo-gray
    },
  },
  typography: {
    fontFamily: '"Comic Relief", "Comic Sans MS", cursive, sans-serif',
    h4: {
      fontFamily: '"Comic Relief", cursive',
      fontWeight: 400,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: "#ffffff",
          boxShadow: "0 6px 20px rgba(110, 95, 234, 0.15)",
          border: "1px solid #E0E0FF",
          borderRadius: 16,
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          "& .Mui-selected": {
            backgroundColor: "#6E5FEA",
            color: "background.default",
          },
        },
      },
    },
  },
});

export default shadowContrastTheme;
