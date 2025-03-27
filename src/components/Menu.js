import { Box, Grid2 as Grid } from "@mui/material";
import React from "react";
import Mike from "../img/avatar2.png";
import { Horizontal, Vertical } from "../style/CommunalStyle";
import styled from "styled-components";
import Category from "./Category";

export default function Menu() {
  return (
    <Vertical
      sx={{
        width: "300px",
        height: "100%",
        overflow: "scroll",
        backgroundColor: "primary.color1",
        display: { lg: "flex", xs: "none" },
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{ padding: "16px", borderBottom: "0.5px solid #d3d3d3" }}
      >
        <Grid size={3}>
          <Box
            component="img"
            alt="Mike"
            src={Mike}
            sx={{ borderRadius: "50%", height: "46px" }}
          />
        </Grid>
        <Grid size={9}>
          <Vertical>
            <span style={{ fontWeight: "500" }}>Welcome Mike</span>
            <Horizontal>
              <Icon>
                <i className="fa fa-envelope"></i>
              </Icon>
              <Icon>
                <i className="fa fa-user"></i>
              </Icon>
              <Icon>
                <i className="fa fa-cog"></i>
              </Icon>
            </Horizontal>
          </Vertical>
        </Grid>
      </Grid>
      <span>DashBoard</span>
      <Category icon="fa fa-users fa-fw" category="Overview" />
      <Category icon="fa fa-eye fa-fw" category="Views" />
      <Category icon="fa fa-users fa-fw" category="Traffic" />
      <Category icon="fa fa-bullseye fa-fw" category="Geo" />
      <Category icon="fa fa-diamond fa-fw" category="Orders" />
      <Category icon="fa fa-bell fa-fw" category="News" />
      <Category icon="fa fa-bank fa-fw" category="General" />
      <Category icon="fa fa-history fa-fw" category="History" />
      <Category icon="fa fa-cog fa-fw" category="Settings" />
    </Vertical>
  );
}

const Icon = styled.a`
  padding: 8px 16px;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: #d3d3d3;
  }
`;
