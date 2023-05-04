import React from "react";
import PropTypes from "prop-types";

import { Box, CircularProgress, Grow, Title } from "./LabeledLoader.styled";

export default function LabeledLoader({ label, ...props }) {
  return (
    <Grow in>
      <Box>
        <Title>{label}</Title>
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
