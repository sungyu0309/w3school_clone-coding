import React from "react";
import Menu from "../components/Menu";
import { Horizontal, Vertical } from "../style/CommunalStyle";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import Feeds from "../components/Feeds";

function Main() {
  return (
    <>
      <Vertical sx={{ height: "100vh", overflow: "scroll" }}>
        <Header />
        <Horizontal sx={{ height: "100%", backgroundColor: "primary.color3" }}>
          <Menu />
          <Vertical
            sx={{
              width: { xs: "100%", md: "calc(100% - 300px)" },
              padding: "20px",
            }}
          >
            <Dashboard />
            <Feeds />
          </Vertical>
        </Horizontal>
      </Vertical>
    </>
  );
}

export default Main;
