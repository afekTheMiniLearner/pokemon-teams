import { styled } from "@mui/material/styles";
import MuiBox from "@mui/material/Box";

export const Box = styled(MuiBox)`
  max-width: 100%;
  position: absolute;
  top: 0;
`;

export const HeaderText = styled("h1")(({ theme }) => ({
  textAlign: "center",
  fontSize: "1.85em",

  [theme.breakpoints.down("lg")]: {
    fontSize: "1.7em",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.25em",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.1em",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "0.9em",
  },
}));
