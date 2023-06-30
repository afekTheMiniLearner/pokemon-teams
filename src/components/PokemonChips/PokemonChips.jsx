import React from "react";
import PropTypes from "prop-types";

import { ChipsBox } from "@base-components";

export default function PokemonChips({
  boxStyle,
  chipsContent,
  isClickAble,
  ...props
}) {
  return (
    <ChipsBox
      boxStyle={boxStyle}
      chipsContent={chipsContent}
      isClickAble
      size="small"
      {...props}
    />
  );
}

PokemonChips.propTypes = {
  boxStyle: PropTypes.shape({}),
  chipsContent: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, icon: PropTypes.node })
  ),
  isClickAble: PropTypes.bool,
};

PokemonChips.defaultProps = {
  boxStyle: {},
  chipsContent: [],
  isClickAble: false,
};
