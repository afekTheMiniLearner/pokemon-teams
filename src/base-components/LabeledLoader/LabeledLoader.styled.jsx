import { styled } from "@mui/material/styles";
import styledComponents from "styled-components";
import MuiCircularProgress from "@mui/material/CircularProgress";
import MuiBox from "@mui/material/Box";
import MuiGrow from "@mui/material/Grow";

export const Box = styled(MuiBox)`
  display: flex;
  flex-direction: column;
  gap: 60px;

  & > * {
    margin: 0 auto;
    padding: 0;
  }
`;

export const CircularProgress = styled(MuiCircularProgress)``;

export const Grow = styled(MuiGrow)`
  transition-delay: 200ms;
`;

export const Title = styledComponents.h3`
  
`;
