import React from "react";
import PropTypes from "prop-types";

import Chip from "@base-components/Chip/Chip";
import { StyledBox } from "./ChipsBox.styled";

export default function ChipsBox({ labels, isClickAble, ...props }) {
  return (
    <StyledBox>
      {labels.map((label, i) => {
        return (
          <Chip
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            label={label}
            onClick={isClickAble ? () => {} : undefined}
            {...props}
          />
        );
      })}
    </StyledBox>
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
