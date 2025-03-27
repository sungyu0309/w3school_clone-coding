import { Button } from "@mui/material";
import React from "react";
import { Horizontal } from "../style/CommunalStyle";

export default function Header() {
  return (
    <Horizontal
      sx={{
        backgroundColor: "primary.color0",
        color: "primary.color1",
        position: "relative",
        alignItems: "center",
        minHeight: "43px",
      }}
    >
      <Button sx={{ display: { md: "flex", lg: "none" } }}>Menu</Button>
      <span style={{ position: "absolute", right: "30px", fontSize: "18px" }}>
        Logo
      </span>
    </Horizontal>
  );
}
