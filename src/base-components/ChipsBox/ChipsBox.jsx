import React from "react";
import PropTypes from "prop-types";

import Chip from "@base-components/Chip/Chip";
import { MuiBox } from "./ChipsBox.styled";

export default function ChipsBox({ labels, isClickAble, ...props }) {
  return (
    <MuiBox>
      {labels.map((label, i) => {
        return (
          <Chip
            key={i}
            label={label}
            onClick={isClickAble ? () => {} : undefined}
            {...props}
          />
        );
      })}
    </MuiBox>
  );
}

ChipsBox.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),
  isClickAble: PropTypes.bool,
};

ChipsBox.defaultProps = {
  labels: [],
  isClickAble: false,
};
