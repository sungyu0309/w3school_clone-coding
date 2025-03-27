import { Button } from "@mui/material";
import React from "react";
import { Horizontal } from "../style/CommunalStyle";

export default function Header() {
  return (
    <Horizontal
      sx={{
        backgroundColor: "primary.black",
        color: "primary.white",
        position: "relative",
        alignItems: "center",
        minHeight: "43px",
      }}
    >
      <Button sx={{ display: { md: "none", sm: "flex" } }}>Menu</Button>
      <span style={{ position: "absolute", right: "30px", fontSize: "18px" }}>
        Logo
      </span>
    </Horizontal>
  );
}
