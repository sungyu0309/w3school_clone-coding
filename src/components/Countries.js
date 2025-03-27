import React from "react";
import { Horizontal, Vertical } from "../style/CommunalStyle";
import { Box, Button, styled } from "@mui/material";

export default function Countries() {
  return (
    <Vertical>
      <span>Countries</span>
      <Wrapper>
        <Content sx={{ backgroundColor: "primary.white" }}>
          <Country>United States</Country>
          <Ratio>65%</Ratio>
        </Content>
        <Content>
          <Country>UK</Country>
          <Ratio>15.7%</Ratio>
        </Content>
        <Content sx={{ backgroundColor: "primary.white" }}>
          <Country>Russia</Country>
          <Ratio>5.6%</Ratio>
        </Content>
        <Content>
          <Country>Spain</Country>
          <Ratio>2.1%</Ratio>
        </Content>
        <Content sx={{ backgroundColor: "primary.white" }}>
          <Country>India</Country>
          <Ratio>1.9%</Ratio>
        </Content>
        <Content>
          <Country>France</Country>
          <Ratio>1.5%</Ratio>
        </Content>
      </Wrapper>
      <StyledButton>More Coutries</StyledButton>
    </Vertical>
  );
}

const Wrapper = styled(Box)(({ theme }) => ({
  border: `1.5px solid ${theme.palette.primary.hover}`,
}));

const Content = styled(Horizontal)(({ theme }) => ({
  cursor: "pointer",
  backgroundColor: theme.palette.primary.gray,
  padding: "10px",
  ":hover": {
    backgroundColor: theme.palette.primary.hover,
  },
}));

const Country = styled(Box)`
  width: 50%;
  text-align: left;
`;

const Ratio = styled(Box)`
  width: 50%;
  text-align: center;
`;

const StyledButton = styled(Button)(({ theme }) => ({
  width: "160px",
  height: "38px",
  borderRadius: "0",
  marginTop: "30px",
  backgroundColor: theme.palette.primary.gray2,
  color: theme.palette.primary.white,
}));
