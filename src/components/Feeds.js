import { Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import { Vertical } from "../style/CommunalStyle";
import { Box } from "@mui/system";
import Map from "../img/region.jpg";
import Feed from "./Feed";

export default function Feeds() {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, sm: 4 }}>
        <Vertical>
          <Typography variant="h5">Regions</Typography>
          <Box component="img" src={Map} alt="Map" />
        </Vertical>
      </Grid>
      <Grid size={{ xs: 12, sm: 8 }}>
        <Vertical>
          <Typography variant="h5">Feeds</Typography>

          <Feed
            icon="fa fa-user w3-text-blue w3-large"
            text="New record, over 90 views."
            time="10 mins"
            color="white"
            iColor="blue"
          />
          <Feed
            icon="fa fa-bell w3-text-red w3-large"
            text="Database error."
            time="15 mins"
            iColor="red"
          />

          <Feed
            icon="fa fa-users w3-text-yellow w3-large"
            text="New record, over 40 users."
            time="17 mins"
            color="white"
            iColor="orange"
          />

          <Feed
            icon="fa fa-comment w3-text-red w3-large"
            text="New comments."
            time="25 mins"
            iColor="red"
          />

          <Feed
            icon="fa fa-bookmark w3-text-blue w3-large"
            text="Check transactions."
            time="28 mins"
            color="white"
            iColor="blue"
          />

          <Feed
            icon="fa fa-laptop w3-text-red w3-large"
            text="CPU overload."
            time="35 mins"
            iColor="orange"
          />

          <Feed
            icon="fa fa-share-alt w3-text-green w3-large"
            text="New shares."
            time="39 mins"
            color="white"
            iColor="green"
          />
        </Vertical>
      </Grid>
    </Grid>
  );
}
