import { GlobalStyles as MUIGlobalStyles } from "@mui/material";
import React from "react";

export default function GlobalStyle() {
  const inputGlobalStyle = (
    <MUIGlobalStyles
      styles={{
        "*": {
          boxSizing: "border-box",
          // fontFamily: "Pretendard-Regular",
          // fontFamily: '"Raleway", sans-serif',
          // fontWeight: "500",
        },
        html: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
          fontSize: "16px",
          //WebkitOverflowScrolling: "touch",
        },
        body: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
        },
        "#root": {
          width: "100%",
          height: "100%",
        },
        input: {
          "&[type=number]": {
            MozAppearance: "textfield",
            "&::-webkit-outer-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
            "&::-webkit-inner-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
          },
        },
        img: {
          display: "block",
          maxWidth: "100%",
          WebkitUserDrag: "none",
        },
        ul: {
          margin: 0,
          padding: 0,
        },
        a: {
          textDecoration: "none",
          color: "inherit",
        },
      }}
    />
  );

  return inputGlobalStyle;
}
