import { styled } from "@mui/material/styles";

import MuiBox from "@mui/material/Box";
import MuiGrow from "@mui/material/Grow";

export const Box = styled(MuiBox)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Grow = styled(MuiGrow)`
  transition-delay: 200ms;
`;
