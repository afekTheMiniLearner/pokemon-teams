import { styled } from "@mui/material/styles";
import MuiToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MuiToggleButton from "@mui/material/ToggleButton";

export const ToggleButtonGroup = styled(MuiToggleButtonGroup)(({ theme }) => ({
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

export const ToggleButton = styled(MuiToggleButton)(({ theme }) => ({
  fontSize: "0.5em",
  height: "40px",
  width: "130px",

  [theme.breakpoints.down("lg")]: {
    fontSize: "13px",
    height: "30px",
    width: "110px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "10px",
    fontWeight: "bolder",
    height: "25px",
    width: "95px",
  },
}));
