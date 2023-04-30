import React from "react";
import PropTypes from "prop-types";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import Pokemon from "@src/assets/Pokemon-Hollow.ttf";
import { StyledBox } from "./Title.styled";

export default function Title({ text }) {
  const theme = createTheme({
    typography: {
      fontFamily: Pokemon,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <StyledBox>
        <Typography variant="h1">{text}</Typography>
      </StyledBox>
    </ThemeProvider>
  );
}

Title.propTypes = {
  text: PropTypes.string,
};

Title.defaultProps = {
  text: "",
};
