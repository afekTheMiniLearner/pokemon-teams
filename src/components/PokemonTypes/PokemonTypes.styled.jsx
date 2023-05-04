import { styled } from "@mui/material/styles";
import MuiZoom from "@mui/material/Zoom";
import MuiBox from "@mui/material/Box";
import MuiAvatar from "@mui/material/Avatar";

export const Box = styled(MuiBox)`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 3px;
  right: 0;
  top: 0;
  gap: 3px;
`;

export const Zoom = styled(MuiZoom)`
  transition-delay: 200ms;
`;

export const Avatar = styled(MuiAvatar)`
  @media (max-width: 1025px) {
    height: 30px;
    width: 30px;
  }

  @media (max-width: 480px) {
    height: 25px;
    width: 25px;
  }
`;
