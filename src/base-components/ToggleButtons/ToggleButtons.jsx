import React from "react";
import PropTypes from "prop-types";

import { ToggleButton as MuiToggleButton } from "@mui/material/ToggleButton";
import { ToggleButtonGroup as MuiToggleButtonGroup } from "@mui/material/ToggleButtonGroup";

export default function ToggleButtons({
  size,
  values,
  color,
  orientation,
  exclusive,
  onChange,
  children,
  ...props
}) {
  return (
    <MuiToggleButtonGroup
      size={size}
      color={color}
      orientation={orientation}
      exclusive={exclusive}
      onChange={onChange}
      {...props}
    >
      {values.map((value) => {
        return <MuiToggleButton value={value} />;
      })}
      {children}
    </MuiToggleButtonGroup>
  );
}

ToggleButtons.propTypes = {
  size: PropTypes.string,
  values: PropTypes.string,
  color: PropTypes.string,
  orientation: PropTypes.string,
  exclusive: PropTypes.bool,
  onChange: PropTypes.string,
};

ToggleButtons.defaultProps = {
  size: undefined,
  values: undefined,
  color: undefined,
  orientation: undefined,
  exclusive: false,
  onChange: undefined,
};
