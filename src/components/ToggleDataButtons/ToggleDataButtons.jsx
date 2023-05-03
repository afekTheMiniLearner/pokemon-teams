import React from "react";
import PropTypes from "prop-types";

import { ToggleButton, ToggleButtonGroup } from "./ToggleDataButtons.styled";

export default function ToggleDataButtons({
  size,
  color,
  currentValue,
  onChange,
  buttonsProperties,
  orientation,
  ...props
}) {
  const onChangeHandler = (_event, newDataType) => {
    onChange(newDataType);
  };

  return (
    <ToggleButtonGroup
      value={currentValue}
      size={size}
      color={color}
      orientation={orientation}
      exclusive
      onChange={onChangeHandler}
      {...props}
    >
      {buttonsProperties?.map((value, i) => {
        const { label, style, icon } = value;
        return (
          <ToggleButton key={i} value={label} sx={style}>
            {label}
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
  onChange: PropTypes.func,
  buttonsProperties: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
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
  onChange: undefined,
  buttonsProperties: [],
  orientation: "vertical",
};
