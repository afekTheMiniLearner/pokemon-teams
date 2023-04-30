import React from "react";
import PropTypes from "prop-types";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Pokemon from "@src/assets/Pokemon-Hollow.ttf";
import { MuiBox, MuiTypography } from "./Title.styled";

export default function Title({ text }) {
  const theme = createTheme({
    typography: {
      fontFamily: Pokemon,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <MuiBox>
        <MuiTypography variant="h1">{text}</MuiTypography>
      </MuiBox>
    </ThemeProvider>
  );
}

Title.propTypes = {
  text: PropTypes.string,
};

Title.defaultProps = {
  text: "",
};
