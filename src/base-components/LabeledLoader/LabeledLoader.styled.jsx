import { styled } from "@mui/material/styles";
import MuiBox from "@mui/material/Box";
import MuiGrow from "@mui/material/Grow";
import MuiAvatar from "@mui/material/Avatar";

export const Box = styled(MuiBox)`
  display: flex;
  flex-direction: column;

  & > * {
    margin: 0 auto;
    padding: 0;
  }
`;

export const Grow = styled(MuiGrow)`
  transition-delay: 200ms;
`;

export const Title = styled("h3")(({ theme }) => ({
  fontSize: "1.3em",

  [theme.breakpoints.down("lg")]: {
    fontSize: "1.1em",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.8em",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.7em",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "0.5em",
  },
}));

export const Avatar = styled(MuiAvatar)(({ theme }) => ({
  height: "140px",
  width: "130px",

  [theme.breakpoints.down("md")]: {
    height: "130px",
    width: "120px",
  },
  [theme.breakpoints.down("xs")]: {
    height: "110px",
    width: "100px",
  },
}));
