import React from "react";
import PropTypes from "prop-types";

import { Box, Grow, Title } from "./LabeledLoader.styled";

export default function LabeledLoader({ label, ...props }) {
  return (
    <Grow in>
      <Box {...props}>
        <Title>{label}</Title>
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
