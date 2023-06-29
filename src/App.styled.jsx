import { styled } from "@mui/material/styles";

// eslint-disable-next-line import/prefer-default-export
export const AppContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  maxWidth: "1400px",
  height: "700px",
  gap: "10px",

  [theme.breakpoints.down("md")]: {
    height: "600px",
    gap: "5px",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "700px",
    height: "470px",
    gap: "2px",
  },
  [theme.breakpoints.down("xs")]: {
    height: "600px",
    maxWidth: "350px",
  },
}));
