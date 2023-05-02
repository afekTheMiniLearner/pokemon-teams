import React from "react";
import PropTypes from "prop-types";

import Chip from "@base-components/Chip/Chip";
import { Box, Grow } from "./ChipsBox.styled";

export default function ChipsBox({
  chipsContent,
  isClickAble,
  boxStyle,
  ...props
}) {
  return (
    <Grow in>
      <Box sx={boxStyle}>
        {chipsContent.map((data, i) => {
          const { label, icon } = data;
          return (
            <Chip
              key={i}
              label={label || undefined}
              icon={icon || undefined}
              onClick={isClickAble ? () => {} : undefined}
              {...props}
            />
          );
        })}
      </Box>
    </Grow>
  );
}

ChipsBox.propTypes = {
  chipsContent: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, icon: PropTypes.node })
  ),
  isClickAble: PropTypes.bool,
  boxStyle: PropTypes.shape({}),
};

ChipsBox.defaultProps = {
  chipsContent: [],
  isClickAble: false,
  boxStyle: {},
};
