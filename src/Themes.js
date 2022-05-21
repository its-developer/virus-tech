import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#F8F8F8",
    },
    cardColor: {
      main: "#1F1D2B",
    },
    themeCardColor: {
      main: "#FFFFFF",
      light: "#F8F8F8",
    },
    primary: {
      main: "#ff00ae",
    },
    secondary: {
      main: "#FF00F5",
    },
  },
});

export { theme };
