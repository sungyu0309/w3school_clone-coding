import React from "react";
import { Horizontal } from "../style/CommunalStyle";
import { Box, Typography } from "@mui/material";

export default function Feed({ icon, text, time, color, iColor }) {
  return (
    <Horizontal
      sx={{
        height: "38.5px",
        backgroundColor: color || "primary.gray",
        alignItems: "center",
        padding: "0 0 0 20px",
      }}
    >
      <Box sx={{ width: "15%" }}>
        <i className={icon} style={{ color: iColor || "black" }}></i>
      </Box>
      <Box sx={{ width: "62%" }}>
        <Typography variant="caption">{text}</Typography>
      </Box>
      <Box sx={{ width: "23%" }}>
        <Typography variant="caption">{time}</Typography>
      </Box>
    </Horizontal>
  );
}
