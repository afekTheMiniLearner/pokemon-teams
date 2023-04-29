import React from "react";
import PropTypes from "prop-types";

import { ChipsBox } from "@base-components";
import { getAttributesArray } from "@utils";

export default function PokemonChips({ attributes, isClickAble, ...props }) {
  return (
    <ChipsBox
      size="small"
      labels={getAttributesArray(attributes)}
      isClickAble
      {...props}
    />
  );
}

PokemonChips.propTypes = {
  attributes: PropTypes.shape({
    attack: PropTypes.number,
    defense: PropTypes.number,
    spAttack: PropTypes.number,
    spDefense: PropTypes.number,
    health: PropTypes.number,
  }),
  isClickAble: PropTypes.bool,
};

PokemonChips.defaultProps = {
  attributes: {},
  isClickAble: false,
};
