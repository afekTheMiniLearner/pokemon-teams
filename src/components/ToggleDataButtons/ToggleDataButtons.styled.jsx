import { styled } from "@mui/material/styles";
import MuiToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MuiToggleButton from "@mui/material/ToggleButton";

export const ToggleButtonGroup = styled(MuiToggleButtonGroup)`
  position: absolute;
  top: 25px;
  right: 30px;
  z-index: 1;
  margin-top: 100px;

  @media (min-width: 1280px) and (max-width: 1470px) {
    margin-top: 0;
    top: unset;
    bottom: 15px;
    right: 30px;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    margin-top: 0;
    top: unset;
    bottom: 15px;
    right: 30px;
  }

  @media (max-width: 1024px) {
    margin-top: 0;
    top: unset;
    bottom: 15px;
    right: 20px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    bottom: 10px;
    right: 5px;
  }

  @media (max-width: 480px) {
    bottom: unset;
    right: unset;
    top: 175px;
  }
`;

export const ToggleButton = styled(MuiToggleButton)`
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 13px;
    height: 30px;
    width: 110px;
  }

  @media (max-width: 1024px) {
    font-size: 10px;
    font-weight: bolder;
    height: 25px;
    width: 95px;
  }
`;
