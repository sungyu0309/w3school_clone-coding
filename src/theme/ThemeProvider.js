import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import GlobalStyles from "../style/globalStyle";
import React from "react";

export default function ThemeProvider({ children }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#f44336",
        black: "black",
        white: "white",
        gray: "#f1f1f1",
        red: "#f44336",
        blue: "#2196F3",
        gray2: "#009688",
        orange: "#ff9800",
        green: "#4CAF50",
      },
    },
  });
  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      {children}
    </MUIThemeProvider>
  );
}
