import React from "react";
import PropTypes from "prop-types";

import { ChipsBox } from "@base-components";

export default function PokemonChips({
  chipContent,
  isClickAble,
  boxStyle,
  ...props
}) {
  return (
    <ChipsBox
      size="small"
      labels={chipContent}
      isClickAble
      boxStyle={boxStyle}
      {...props}
    />
  );
}

PokemonChips.propTypes = {
  chipContent: PropTypes.arrayOf(PropTypes.string),
  isClickAble: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  boxStyle: PropTypes.object,
};

PokemonChips.defaultProps = {
  chipContent: [],
  isClickAble: false,
  boxStyle: {},
};
