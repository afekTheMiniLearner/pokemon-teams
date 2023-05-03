import { styled } from "@mui/material/styles";
import MuiZoom from "@mui/material/Zoom";
import MuiBox from "@mui/material/Box";
import MuiAvatar from "@mui/material/Avatar";

export const Box = styled(MuiBox)`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin: 2px;
  right: 0;
  top: 0;
  gap: 1px;
`;

export const Zoom = styled(MuiZoom)`
  transition-delay: 200ms;
`;

export const Avatar = styled(MuiAvatar)``;
