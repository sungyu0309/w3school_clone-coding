import { Grid2 as Grid } from "@mui/material";
import React from "react";
import { Horizontal, Vertical } from "../style/CommunalStyle";
import { Box } from "@mui/system";
import Map from "../img/region.jpg";

export default function Feeds() {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 4 }}>
        <Vertical>
          <span>Regions</span>
          <Box component="img" src={Map} alt="Map" />
        </Vertical>
      </Grid>
      <Grid size={{ xs: 12, sm: 8 }}>
        <Vertical>
          <span>Feeds</span>
          <Horizontal sx={{ height: "38.5px" }}>
            <Box sx={{ width: "15%" }}>
              <i className="fa fa-user w3-text-blue w3-large"></i>
            </Box>
            <Box sx={{ width: "62%" }}>New record, over 90 views.</Box>
            <Box sx={{ width: "23%" }}>10 mins</Box>
          </Horizontal>
          <Horizontal sx={{ height: "38.5px" }}>
            <Box sx={{ width: "15%" }}>
              <i className="fa fa-bell w3-text-red w3-large"></i>
            </Box>
            <Box sx={{ width: "62%" }}>Database error.</Box>
            <Box sx={{ width: "23%" }}>15 mins</Box>
          </Horizontal>
          <Horizontal sx={{ height: "38.5px" }}>
            <Box sx={{ width: "15%" }}>
              <i className="fa fa-users w3-text-yellow w3-large"></i>
            </Box>
            <Box sx={{ width: "62%" }}>New record, over 40 users. </Box>
            <Box sx={{ width: "23%" }}>17 mins</Box>
          </Horizontal>
          <Horizontal sx={{ height: "38.5px" }}>
            <Box sx={{ width: "15%" }}>
              <i className="fa fa-comment w3-text-red w3-large"></i>
            </Box>
            <Box sx={{ width: "62%" }}>New comments.</Box>
            <Box sx={{ width: "23%" }}>25 mins</Box>
          </Horizontal>
          <Horizontal sx={{ height: "38.5px" }}>
            <Box sx={{ width: "15%" }}>
              <i className="fa fa-bookmark w3-text-blue w3-large"></i>
            </Box>
            <Box sx={{ width: "62%" }}>Check transactions.</Box>
            <Box sx={{ width: "23%" }}>28 mins</Box>
          </Horizontal>
          <Horizontal sx={{ height: "38.5px" }}>
            <Box sx={{ width: "15%" }}>
              <i className="fa fa-laptop w3-text-red w3-large"></i>
            </Box>
            <Box sx={{ width: "62%" }}>CPU overload.</Box>
            <Box sx={{ width: "23%" }}>35 mins</Box>
          </Horizontal>
          <Horizontal sx={{ height: "38.5px" }}>
            <Box sx={{ width: "15%" }}>
              <i className="fa fa-share-alt w3-text-green w3-large"></i>
            </Box>
            <Box sx={{ width: "62%" }}>New shares.</Box>
            <Box sx={{ width: "23%" }}>39 mins</Box>
          </Horizontal>
        </Vertical>
      </Grid>
    </Grid>
  );
}
