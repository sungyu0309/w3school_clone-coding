import React from "react";
import { Vertical } from "../style/CommunalStyle";
import { Box, Grid2 as Grid } from "@mui/material";

export default function Stats() {
  return (
    <Vertical>
      <span>General Stats</span>
      <Box>
        <span>New Visitor</span>
        <Grid container>
          <Grid size={3} sx={{ backgroundColor: "primary.green" }}>
            25%
          </Grid>
          <Grid size={9} sx={{ backgroundColor: "primary.gray2" }}></Grid>
        </Grid>
      </Box>
      <Box>
        <span>New Visitor</span>
        <Grid container>
          <Grid size={6} sx={{ backgroundColor: "primary.orange" }}>
            50%
          </Grid>
          <Grid size={6} sx={{ backgroundColor: "primary.gray2" }}></Grid>
        </Grid>
      </Box>
      <Box>
        <span>New Visitor</span>
        <Grid container>
          <Grid size={9} sx={{ backgroundColor: "primary.red" }}>
            75%
          </Grid>
          <Grid size={3} sx={{ backgroundColor: "primary.gray2" }}></Grid>
        </Grid>
      </Box>
    </Vertical>
  );
}
