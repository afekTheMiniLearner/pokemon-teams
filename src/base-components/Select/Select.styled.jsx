import { styled } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MuiMenuItem from "@mui/material/MenuItem";

export const MuiSelect = styled(Select)(({ theme }) => ({
  position: "absolute",
  top: "25px",
  right: "30px",
  zIndex: 1,
  marginTop: "100px",
  backgroundColor: "white",

  [theme.breakpoints.down("lg")]: {
    top: "unset",
    bottom: "15px",
    right: "30px",
    marginTop: "100px",
  },
  [theme.breakpoints.down("md")]: {
    right: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    bottom: "10px",
    right: "5px",
  },
  [theme.breakpoints.down("xs")]: {
    bottom: "unset",
    right: "unset",
    top: "80px",
  },
}));

export const MenuItem = MuiMenuItem;
