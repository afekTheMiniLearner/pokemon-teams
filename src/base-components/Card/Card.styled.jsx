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

  @media (min-width: 1025px) and (max-width: 1280px) {
    height: 260px;
    width: 300px;
    margin: 0 10px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    height: 230px;
    width: 260px;
    margin: 0 5px;
  }

  @media (min-width: 510px) and (max-width: 767px) {
    height: 230px;
    width: 240px;
    margin: 0;
  }

  @media (max-width: 509px) {
    height: 210px;
    width: 230px;
    margin: 0;
  }
`;

export const CardContent = styled(MuiCardContent)``;

export const CardMedia = styled(MuiCardMedia)`
  height: 150px;
  object-fit: contain;

  @media (min-width: 1025px) and (max-width: 1280px) {
    height: 120px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    height: 100px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    height: 90px;
  }

  @media (max-width: 480px) {
    height: 80px;
  }
`;

export const CardActionArea = styled(MuiCardActionArea)``;

export const TitleTypography = styled(MuiTypography)`
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 1.2em;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.1em;
  }

  @media (max-width: 767px) {
    font-size: 1em;
  }
`;

export const ContentTypography = styled(MuiTypography)`
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 0.8em;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.7em;
  }

  @media (max-width: 767px) {
    font-size: 0.6em;
  }
`;

export const Grow = styled(MuiGrow)``;

export const Box = styled(MuiBox)`
  display: flex;
  align-items: center;
  height: 63px;
`;
