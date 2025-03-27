import React from "react";
import Menu from "../components/Menu";
import { Horizontal, Vertical } from "../style/CommunalStyle";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import Feeds from "../components/Feeds";
import Stats from "../components/Stats";
import Countries from "../components/Countries";

function Main() {
  return (
    <>
      <Vertical sx={{ height: "100vh" }}>
        <Header />
        <Horizontal sx={{ height: "100%", backgroundColor: "primary.gray" }}>
          <Menu />
          <Vertical
            sx={{
              width: { xs: "100%", md: "calc(100% - 300px)" },
              padding: "20px",
              overflow: "scroll",
            }}
          >
            <Dashboard />
            <Feeds />
            <Stats />
            <Countries />
          </Vertical>
        </Horizontal>
      </Vertical>
    </>
  );
}

export default Main;
