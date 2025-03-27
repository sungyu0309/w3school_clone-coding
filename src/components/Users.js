import React from "react";
import { Horizontal as Horizontal2, Vertical } from "../style/CommunalStyle";
import { Box, styled } from "@mui/material";
import Mike from "../img/avatar2.png";
import Jill from "../img/avatar5.png";
import Jane from "../img/avatar6.png";

export default function Users() {
  return (
    <Vertical>
      <span>Recent Users</span>
      <Box
        sx={{
          backgroundColor: "primary.white",
          boxShadow:
            "0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 4px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <Horizontal>
          <Box
            component="img"
            src={Mike}
            alt="Mike"
            sx={{ borderRadius: "50%", height: "35px" }}
          />
          <span>Mike</span>
        </Horizontal>
        <Horizontal>
          <Box
            component="img"
            src={Jill}
            alt="Jill"
            sx={{ borderRadius: "50%", height: "35px" }}
          />
          <span>Jill</span>
        </Horizontal>
        <Horizontal>
          <Box
            component="img"
            src={Jane}
            alt="Jane"
            sx={{ borderRadius: "50%", height: "35px" }}
          />
          <span>Jane</span>
        </Horizontal>
      </Box>
    </Vertical>
  );
}

const Horizontal = styled(Horizontal2)(({ theme }) => ({
  height: "69px",
  alignItems: "center",
  padding: "10px 20px",
  borderBottom: `1px solid ${theme.palette.primary.hover}`,
}));
