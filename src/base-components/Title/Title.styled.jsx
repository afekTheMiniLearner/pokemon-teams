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

  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 1.7em;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.25em;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 1.1em;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
    text-align:center;
  }
`;
