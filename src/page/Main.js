import React from "react";
import Menu from "../components/Menu/Menu";
import { Horizontal } from "../style/CommunalStyle";

function Main() {
  return (
    <>
      <Horizontal sx={{ height: "100%" }}>
        <Menu />
        hello world
      </Horizontal>
    </>
  );
}

export default Main;
