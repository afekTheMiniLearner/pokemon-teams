import React from "react";
import PropTypes from "prop-types";

import { Box, Grow, Title, Avatar } from "./LabeledLoader.styled";

export default function LabeledLoader({ label, ...props }) {
  return (
    <Grow in>
      <Box {...props}>
        <Avatar variant="square" src="/confused.png" />
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
