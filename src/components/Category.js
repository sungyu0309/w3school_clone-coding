import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

function Category({ icon, category }) {
  return (
    <Link>
      <i className={icon}></i>
      <Typography variant="caption">{category}</Typography>
    </Link>
  );
}

export default Category;

const Link = styled.a`
  padding: 8px 16px;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: #d3d3d3;
  }
  i {
    margin-right: 10px;
  }
`;
