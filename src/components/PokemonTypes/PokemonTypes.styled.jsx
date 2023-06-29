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

export const Avatar = styled(MuiAvatar)(({ theme }) => ({
  height: "40px",
  width: "40px",

  [theme.breakpoints.down("md")]: {
    height: "30px",
    width: "30px",
  },
  [theme.breakpoints.down("xs")]: {
    height: "25px",
    width: "25px",
  },
}));
