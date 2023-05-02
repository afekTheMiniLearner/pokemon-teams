import React from "react";
import PropTypes from "prop-types";

import { ChipsBox } from "@base-components";

export default function PokemonTypes({
  types,
  isClickAble,
  boxStyle,
  ...props
}) {
  return (
    <ChipsBox
      chipsContent={types}
      isClickAble
      boxStyle={{ position: "absolute", right: 0, top: 0, margin: "2px" }}
      {...props}
    />
  );
}

PokemonTypes.propTypes = {
  types: PropTypes.arrayOf(PropTypes.shape({ icon: PropTypes.string })),
  isClickAble: PropTypes.bool,
  boxStyle: PropTypes.shape({}),
};

PokemonTypes.defaultProps = {
  types: [],
  isClickAble: false,
  boxStyle: {},
};
