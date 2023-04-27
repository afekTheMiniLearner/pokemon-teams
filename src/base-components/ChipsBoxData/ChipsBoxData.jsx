import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import Chip from "@base-components/Chip/Chip";

export default function ChipsBoxData({ labels, isClickAble, ...props }) {
  return (
    <Box>
      {labels.map((label, i) => {
        return (
          <Chip
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            label={label}
            onClick={isClickAble ? () => {} : undefined}
            {...props}
          />
        );
      })}
    </Box>
  );
}

ChipsBoxData.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),
  isClickAble: PropTypes.bool,
};

ChipsBoxData.defaultProps = {
  labels: [],
  isClickAble: false,
};
