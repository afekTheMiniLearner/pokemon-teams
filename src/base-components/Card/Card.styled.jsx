import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import MuiCardContent from "@mui/material/CardContent";
import MuiCardMedia from "@mui/material/CardMedia";
import MuiCardActionArea from "@mui/material/CardActionArea";
import MuiTypography from "@mui/material/Typography";
import MuiGrow from "@mui/material/Grow";

export const MuiCard = styled(Card)`
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
