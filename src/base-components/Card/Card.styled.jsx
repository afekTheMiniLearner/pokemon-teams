import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import MuiCardContent from "@mui/material/CardContent";
import MuiCardMedia from "@mui/material/CardMedia";
import MuiCardActionArea from "@mui/material/CardActionArea";
import MuiTypography from "@mui/material/Typography";
import MuiGrow from "@mui/material/Grow";
import MuiBox from "@mui/material/Box";

export const MuiCard = styled(Card)(({ theme }) => ({
  display: "flex",
  height: "310px",
  width: "370px",
  margin: "0 20px",

  [theme.breakpoints.down("lg")]: {
    height: "260px",
    width: "300px",
    margin: "0 10px",
  },
  [theme.breakpoints.down("md")]: {
    height: "230px",
    width: "260px",
    margin: "0 5px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "230px",
    width: "240px",
    margin: 0,
  },
  [theme.breakpoints.down("xs")]: {
    height: "210px",
    width: "230px",
    margin: 0,
  },
}));

export const CardContent = styled(MuiCardContent)``;

export const CardMedia = styled(MuiCardMedia)(({ theme }) => ({
  height: "150px",
  objectFit: "contain",

  [theme.breakpoints.down("lg")]: {
    height: "120px",
  },
  [theme.breakpoints.down("md")]: {
    height: "90px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "80px",
  },
}));

export const CardActionArea = styled(MuiCardActionArea)``;

export const TitleTypography = styled(MuiTypography)(({ theme }) => ({
  fontSize: "1.2em",

  [theme.breakpoints.down("md")]: {
    fontSize: "1.1em",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1em",
  },
}));

export const ContentTypography = styled(MuiTypography)(({ theme }) => ({
  fontSize: "0.8em",

  [theme.breakpoints.down("md")]: {
    fontSize: "0.7em",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.6em",
  },
}));

export const Grow = styled(MuiGrow)``;

export const Box = styled(MuiBox)`
  max-height: 63px;
  height: 63px;
  overflow-y: auto;
  margin-top: 20px;
`;
