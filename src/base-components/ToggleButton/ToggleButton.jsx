import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import Proptypes from "prop-types";

// eslint-disable-next-line import/no-extraneous-dependencies
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
  size: Proptypes.string,
  value: Proptypes.string,
  color: Proptypes.string,
  orientation: Proptypes.string,
  selected: Proptypes.bool,
  onChange: Proptypes.string,
};

ToggleButton.defaultProps = {
  size: undefined,
  value: undefined,
  color: undefined,
  orientation: undefined,
  selected: undefined,
  onChange: undefined,
};
