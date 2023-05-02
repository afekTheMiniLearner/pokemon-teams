import React from "react";
import PropTypes from "prop-types";

import PokemonChips from "@components/PokemonChips/PokemonChips";
import { TYPES_ICONS } from "@utils";

export default function PokemonTypesChips({
  types,
  isClickAble,
  boxStyle,
  ...props
}) {
  return (
    <ChipsBox
      size="small"
      chipsContent={}
      isClickAble
      boxStyle={{ position: "absolute", right: 0, top: 0, margin: "2px" }}
      {...props}
    />
  );
}

PokemonTypesChips.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string),
  isClickAble: PropTypes.bool,
  boxStyle: PropTypes.shape({}),
};

PokemonTypesChips.defaultProps = {
  types: [],
  isClickAble: false,
  boxStyle: {},
};
