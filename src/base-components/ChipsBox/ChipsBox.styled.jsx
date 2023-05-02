import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import MuiGrow from "@mui/material/Grow";

export const MuiBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Grow = styled(MuiGrow)`
  transition-delay: 200ms;
`;
