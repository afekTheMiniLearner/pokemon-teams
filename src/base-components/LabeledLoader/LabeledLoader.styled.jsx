import { styled } from "@mui/material/styles";
import MuiBox from "@mui/material/Box";
import MuiGrow from "@mui/material/Grow";

export const Box = styled(MuiBox)`
  display: flex;
  flex-direction: column;
  gap: 60px;

  & > * {
    margin: 0 auto;
    padding: 0;
  }
`;

export const Grow = styled(MuiGrow)`
  transition-delay: 200ms;
`;

export const Title = styled("h3")`
  font-size: 1.3em;

  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 1.1em;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.8em;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 0.7em;
  }

  @media (max-width: 480px) {
    font-size: 0.5em;
  }
`;
