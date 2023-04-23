import React from "react";
import PropTypes from "prop-types";

import {
  ToggleButtonGroup as MuiToggleButtonGroup,
  ToggleButton as MuiToggleButton,
} from "@mui/material";
import { TOGGLE_DATA_OPTIONS } from "@utils";

export default function ToggleDataButtons({
  size,
  color,
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
      {TOGGLE_DATA_OPTIONS.map((value) => {
        return <MuiToggleButton value={value} />;
      })}
      {children}
    </MuiToggleButtonGroup>
  );
}

ToggleDataButtons.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  orientation: PropTypes.string,
  onChange: PropTypes.string,
};

ToggleDataButtons.defaultProps = {
  size: undefined,
  color: "default",
  orientation: "horizontal",
  onChange: undefined,
};
