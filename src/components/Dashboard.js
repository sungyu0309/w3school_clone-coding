import React from "react";
import { Vertical } from "../style/CommunalStyle";
import { Grid2 as Grid, Typography } from "@mui/material";

export default function Dashboard() {
  return (
    <Vertical>
      <Typography variant="h5">My Dashboard</Typography>
      <Grid container spacing={2}>
        <Grid
          size={{ xs: 12, sm: 3 }}
          sx={{ border: "1px solid black", height: "138px" }}
        >
          Message
        </Grid>
        <Grid
          size={{ xs: 12, sm: 3 }}
          sx={{ border: "1px solid black", height: "138px" }}
        >
          Views
        </Grid>
        <Grid
          size={{ xs: 12, sm: 3 }}
          sx={{ border: "1px solid black", height: "138px" }}
        >
          Share
        </Grid>
        <Grid
          size={{ xs: 12, sm: 3 }}
          sx={{ border: "1px solid black", height: "138px" }}
        >
          User
        </Grid>
      </Grid>
    </Vertical>
  );
}
