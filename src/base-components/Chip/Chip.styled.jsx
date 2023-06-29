import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";

// eslint-disable-next-line import/prefer-default-export
export const MuiChip = styled(Chip)(({ theme }) => ({
  display: "flex !important",
  justifyContent: "center !important",
  alignItems: "center !important",
  fontSize: "0.75em",
  fontWeight: "bolder",

  [theme.breakpoints.down("md")]: {
    fontSize: "0.6em",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.56em",
  },
}));
