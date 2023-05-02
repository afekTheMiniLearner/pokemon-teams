import React from "react";
import PropTypes from "prop-types";

import Fab from "@mui/material/Fab";
import { Box } from "./PokemonTypes.styled";

export default function PokemonTypes({ typesIcons, isClickAble, boxStyle }) {
  return (
    <Box sx={boxStyle}>
      {Object.entries(typesIcons).map(([type, icon]) => {
        return (
          <Fab disable={!isClickAble} aria-label={type}>
            {icon}
          </Fab>
        );
      })}
    </Box>
  );
}

PokemonTypes.propTypes = {
  typesIcons: PropTypes.arrayOf(PropTypes.shape({ icon: PropTypes.string })),
  isClickAble: PropTypes.bool,
  boxStyle: PropTypes.shape({}),
};

PokemonTypes.defaultProps = {
  typesIcons: [],
  isClickAble: false,
  boxStyle: {},
};
