import { styled } from "@mui/material/styles";
import MuiZoom from "@mui/material/Zoom";
import MuiBox from "@mui/material/Box";

export const Box = styled(MuiBox)`
  position: absolute;
  margin: 2px;
  right: 0;
  top: 0;
`;

export const Zoom = styled(MuiZoom)`
  transition-delay: 200ms;
`;
