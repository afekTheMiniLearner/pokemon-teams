import React from "react";
import PropTypes from "prop-types";

import { Box, CircularProgress } from "./LabeledLoader.styled";

export default function LabeledLoader({ label, ...props }) {
  return (
    <Box>
      <h3>{label}</h3>
      <CircularProgress color="warning" {...props} />
    </Box>
  );
}

LabeledLoader.propTypes = {
  label: PropTypes.string,
};

LabeledLoader.defaultProps = {
  label: "",
};
