import React from "react";
import PropTypes from "prop-types";

import {
  ToggleButtonGroup as MuiToggleButtonGroup,
  ToggleButton as MuiToggleButton,
} from "@mui/material";

export default function ToggleDataButtons({
  size,
  color,
  values,
  orientation,
  onChange,
  children,
  ...props
}) {
  return (
    <MuiToggleButtonGroup
      size={size}
      color={color}
      orientation={orientation}
      exclusive
      onChange={onChange}
      {...props}
    >
      {values.map((value, i) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <MuiToggleButton key={i} value={value}>
            {value}
          </MuiToggleButton>
        );
      })}
      {children}
    </MuiToggleButtonGroup>
  );
}

ToggleDataButtons.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  values: PropTypes.arrayOf(PropTypes.string),
  orientation: PropTypes.string,
  onChange: PropTypes.string,
};

ToggleDataButtons.defaultProps = {
  size: undefined,
  color: "default",
  values: [],
  orientation: "horizontal",
  onChange: undefined,
};
