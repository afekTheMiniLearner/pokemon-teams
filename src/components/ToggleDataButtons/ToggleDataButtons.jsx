import React from "react";
import PropTypes from "prop-types";

import {
  MuiToggleButton,
  MuiToggleButtonGroup,
} from "./ToggleDataButtons.styled";

export default function ToggleDataButtons({
  size,
  color,
  currentValue,
  setValue,
  values,
  orientation,
  ...props
}) {
  const onChangeHandler = (_event, newDataType) => {
    setValue(newDataType);
  };

  return (
    <MuiToggleButtonGroup
      value={currentValue}
      size={size}
      color={color}
      orientation={orientation}
      exclusive
      onChange={onChangeHandler}
      aria-label="Platform"
      {...props}
    >
      {values.map((value, i) => {
        return (
          <MuiToggleButton key={i} value={value}>
            {value}
          </MuiToggleButton>
        );
      })}
    </MuiToggleButtonGroup>
  );
}

ToggleDataButtons.propTypes = {
  size: PropTypes.string,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "error",
    "warning",
    "info",
    "success",
    "text",
  ]),
  currentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setValue: PropTypes.func,
  values: PropTypes.arrayOf(PropTypes.string),
  orientation: PropTypes.string,
};
ToggleDataButtons.defaultProps = {
  size: "small",
  color: "success",
  currentValue: undefined,
  setValue: undefined,
  values: [],
  orientation: "horizontal",
};
