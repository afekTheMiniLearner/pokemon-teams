import React from "react";
import PropTypes from "prop-types";

import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

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
    <ToggleButtonGroup
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
          <ToggleButton key={i} value={value}>
            {value}
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
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
