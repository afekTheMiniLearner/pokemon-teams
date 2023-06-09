import React from "react";
import PropTypes from "prop-types";

import { Box, HeaderText } from "./Title.styled";

export default function Title({ text, ...props }) {
  return (
    <Box>
      <HeaderText {...props}>{text}</HeaderText>
    </Box>
  );
}

Title.propTypes = {
  text: PropTypes.string,
};

Title.defaultProps = {
  text: "",
};
