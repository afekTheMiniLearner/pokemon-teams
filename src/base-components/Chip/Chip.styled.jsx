import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";

// eslint-disable-next-line import/prefer-default-export
export const MuiChip = styled(Chip)`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;

  @media (min-width: 1025px) and (max-width: 1280px) {
    font-weight: bolder;
    font-size: 0.8em;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-weight: bolder;
    font-size: 0.6em;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-weight: bolder;
    font-size: 0.54em;
  }

  @media (max-width: 480px) {
    font-weight: bolder;
    font-size: 0.49em;
  }
`;
