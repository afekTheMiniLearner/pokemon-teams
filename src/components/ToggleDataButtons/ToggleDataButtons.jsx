import React from "react";
import PropTypes from "prop-types";

import { MuiSelect, MenuItem } from "./ToggleDataButtons.styled";

export default function ToggleDataButtons({
  size,
  currentValue,
  onChange,
  buttonsProperties,
  ...props
}) {
  return (
    <MuiSelect
      value={currentValue}
      size={size}
      onChange={(e) => onChange(e.target.value)}
      {...props}
    >
      {buttonsProperties?.map((value, i) => {
        const { label, style } = value;
        return (
          <MenuItem key={i} value={label} sx={style}>
            {label}
          </MenuItem>
        );
      })}
    </MuiSelect>
  );
}

ToggleDataButtons.propTypes = {
  size: PropTypes.string,
  currentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  buttonsProperties: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      style: PropTypes.shape({}),
    })
  ),
};
ToggleDataButtons.defaultProps = {
  size: "small",
  currentValue: undefined,
  onChange: undefined,
  buttonsProperties: [],
};
