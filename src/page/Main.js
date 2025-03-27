import React from "react";
import Menu from "../components/Menu";
import { Horizontal, Vertical } from "../style/CommunalStyle";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";

function Main() {
  return (
    <>
      <Vertical sx={{ height: "100vh", overflow: "scroll" }}>
        <Header />
        <Horizontal sx={{ height: "100%", backgroundColor: "primary.color3" }}>
          <Menu />
          <Vertical
            sx={{
              width: { xs: "100%", lg: "calc(100% - 300px)" },
              padding: "20px",
            }}
          >
            <Dashboard />
          </Vertical>
        </Horizontal>
      </Vertical>
    </>
  );
}

export default Main;
