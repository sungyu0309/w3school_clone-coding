import React from "react";
import { Horizontal, Vertical } from "../style/CommunalStyle";
import { Box } from "@mui/material";
import Mike from "../img/avatar2.png";

export default function Users() {
  return (
    <Vertical>
      <span>Recent Users</span>
      <Box>
        <Horizontal>
          <Box component="img" src={Mike} alt="Mike" />
          <span>Mike</span>
        </Horizontal>
      </Box>
    </Vertical>
  );
}
