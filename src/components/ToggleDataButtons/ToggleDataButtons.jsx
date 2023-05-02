import React from "react";
import PropTypes from "prop-types";

import { ToggleButton, ToggleButtonGroup } from "./ToggleDataButtons.styled";

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
      {values?.map((value, i) => {
        const { name, style, icon } = value;
        return (
          <ToggleButton key={i} value={name} sx={style}>
            {name}
            {icon}
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
  values: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      style: PropTypes.shape({}),
      icon: PropTypes.node,
    })
  ),
  orientation: PropTypes.string,
};
ToggleDataButtons.defaultProps = {
  size: "small",
  color: undefined,
  currentValue: undefined,
  setValue: undefined,
  values: [],
  orientation: "vertical",
};
