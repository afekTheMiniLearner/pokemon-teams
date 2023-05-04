import { styled } from "@mui/material/styles";
import MuiToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MuiToggleButton from "@mui/material/ToggleButton";

export const ToggleButtonGroup = styled(MuiToggleButtonGroup)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  margin-top: 100px;
  margin-right: 100px;

  @media (min-width: 1280px) and (max-width: 1470px) {
    margin-right: 60px;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    margin-right: 30px;
  }
`;

export const ToggleButton = styled(MuiToggleButton)``;
