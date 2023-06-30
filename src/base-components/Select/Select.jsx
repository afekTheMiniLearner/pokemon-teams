import React from "react";
import PropTypes from "prop-types";

import { MuiSelect, MenuItem } from "./Select.styled";

export default function Select({
  size,
  currentValue,
  onChange,
  optionsProperties,
  ...props
}) {
  return (
    <MuiSelect
      value={currentValue}
      size={size}
      onChange={(e) => onChange(e.target.value)}
      sx={optionsProperties?.[currentValue]?.style}
      {...props}
    >
      {Object.entries(optionsProperties)?.map(([label, properties], i) => {
        const { style } = properties;
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
  optionsProperties: PropTypes.objectOf(
    PropTypes.shape({
      style: PropTypes.shape({
        color: PropTypes.string,
      }),
    })
  ),
};
Select.defaultProps = {
  size: "small",
  currentValue: undefined,
  onChange: undefined,
  optionsProperties: [],
};
