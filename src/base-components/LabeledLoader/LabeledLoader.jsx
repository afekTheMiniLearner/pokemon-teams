import React from "react";
import PropTypes from "prop-types";

import { Box, CircularProgress,Grow } from "./LabeledLoader.styled";

export default function LabeledLoader({ label, ...props }) {
  return (
    <Grow in>
      <Box>
        <h3>{label}</h3>
        <CircularProgress color="warning" {...props} />
      </Box>
    </Grow>
  );
}

LabeledLoader.propTypes = {
  label: PropTypes.string,
};

LabeledLoader.defaultProps = {
  label: "",
};
