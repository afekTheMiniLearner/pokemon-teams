import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import MuiCardContent from "@mui/material/CardContent";
import MuiCardMedia from "@mui/material/CardMedia";
import MuiCardActionArea from "@mui/material/CardActionArea";
import MuiTypography from "@mui/material/Typography";
import MuiGrow from "@mui/material/Grow";
import MuiBox from "@mui/material/Box";

export const MuiCard = styled(Card)`
  display: flex;
  height: 310px;
  width: 370px;
  margin: 0 20px;
`;

export const CardContent = styled(MuiCardContent)``;

export const CardMedia = styled(MuiCardMedia)`
  height: 150px;
  object-fit: contain;
`;

export const CardActionArea = styled(MuiCardActionArea)``;

export const Typography = styled(MuiTypography)``;

export const Grow = styled(MuiGrow)``;

export const Box = styled(MuiBox)`
  display: flex;
  align-items: center;
  height: 63px;
`;
