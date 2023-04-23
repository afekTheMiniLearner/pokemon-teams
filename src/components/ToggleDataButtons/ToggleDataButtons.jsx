import React, { useState } from "react";
import PropTypes from "prop-types";

import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";

export default function ToggleDataButtons({
  size,
  color,
  values,
  orientation,
  sx,
  ...props
}) {
  const [dataType, setDataType] = useState(values?.[0]);

  const onChangeHandler = (_event, newDataType) => {
    setDataType(newDataType);
  };

  return (
    <ToggleButtonGroup
      value={dataType}
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
          // eslint-disable-next-line react/no-array-index-key
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
  values: PropTypes.arrayOf(PropTypes.string),
  orientation: PropTypes.string,
  sx: PropTypes.shape({}),
};
ToggleDataButtons.defaultProps = {
  size: "small",
  color: "success",
  values: [],
  orientation: "horizontal",
  sx: {},
};
