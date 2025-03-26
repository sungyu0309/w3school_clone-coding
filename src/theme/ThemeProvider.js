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
        color1: "#2196F3",
        color2: "#d3d3d3",
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
