import { styled } from "@mui/material/styles";
import styledComponents from "styled-components";
import MuiBox from "@mui/material/Box";

export const Box = styled(MuiBox)`
  max-width: 100%;
  position: absolute;
  top: 0;
`;

export const HeaderText = styledComponents.h1`
  font-size:2em;
`;
