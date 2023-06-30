import React from "react";
import PropTypes from "prop-types";

import { MuiSelect, MenuItem } from "./Select.styled";

export default function Select({
  size,
  currentValue,
  onChange,
  optionProperties,
  ...props
}) {
  return (
    <MuiSelect
      value={currentValue}
      size={size}
      onChange={(e) => onChange(e.target.value)}
      {...props}
    >
      {optionProperties?.map((value, i) => {
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

Select.propTypes = {
  size: PropTypes.string,
  currentValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  optionProperties: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      style: PropTypes.shape({}),
    })
  ),
};
Select.defaultProps = {
  size: "small",
  currentValue: undefined,
  onChange: undefined,
  optionProperties: [],
};
