import { Box, Button } from "@mui/material";
import React from "react";
import { Horizontal } from "../style/CommunalStyle";

export default function Header() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
      }}
    >
      <Horizontal
        sx={{
          backgroundColor: "primary.black",
          color: "primary.white",
          position: "relative",
          alignItems: "center",
          height: "43px",
        }}
      >
        <Button sx={{ display: { md: "none", sm: "flex" } }}>Menu</Button>
        <span style={{ position: "absolute", right: "30px", fontSize: "18px" }}>
          Logo
        </span>
      </Horizontal>
    </Box>
  );
}
