import React from "react";
import PropTypes from "prop-types";

import { ToggleButtonGroup as MuiToggleButtonGroup } from "@mui/material";

export default function ToggleButton({
  size,
  value,
  color,
  orientation,
  selected,
  onChange,
  children,
}) {
  return (
    <MuiToggleButtonGroup
      size={size}
      value={value}
      color={color}
      orientation={orientation}
      selected={selected}
      onChange={onChange}
    >
      {children}
    </MuiToggleButtonGroup>
  );
}

ToggleButton.propTypes = {
  size: PropTypes.string,
  value: PropTypes.string,
  color: PropTypes.string,
  orientation: PropTypes.string,
  selected: PropTypes.bool,
  onChange: PropTypes.string,
};

ToggleButton.defaultProps = {
  size: undefined,
  value: undefined,
  color: undefined,
  orientation: undefined,
  selected: undefined,
  onChange: undefined,
};
