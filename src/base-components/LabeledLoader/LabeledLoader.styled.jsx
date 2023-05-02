import { styled } from "@mui/material/styles";

import MuiBox from "@mui/material/Box";

// eslint-disable-next-line import/prefer-default-export
export const Box = styled(MuiBox)`
  display: flex;
  flex-direction: column;
  gap: 60px;

  & > * {
    margin: 0 auto;
    padding: 0;
  }
`;
