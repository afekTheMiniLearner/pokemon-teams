import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

import { StyledBox } from "./Title.styled";

export default function Title({ text }) {
  return (
    <StyledBox>
      <Typography variant="h1">{text}</Typography>
    </StyledBox>
  );
}

Title.propTypes = {
  text: PropTypes.string,
};

Title.defaultProps = {
  text: "",
};
