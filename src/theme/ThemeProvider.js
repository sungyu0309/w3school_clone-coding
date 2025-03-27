import { createTheme, CssBaseline } from "@mui/material";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import GlobalStyles from "../style/globalStyle";
import React from "react";

export default function ThemeProvider({ children }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#f44336",
        color0: "black",
        color1: "white",
        color2: "#2196F3",
        color3: "#f1f1f1",
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
