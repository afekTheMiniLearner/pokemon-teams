import React from "react";
import PropTypes from "prop-types";

import Avatar from "@mui/material/Avatar";
import { Box } from "./PokemonTypes.styled";

export default function PokemonTypes({ typesIcons, isClickAble, boxStyle }) {
  return (
    <Box sx={boxStyle}>
      {Object.entries(typesIcons).map(([type, icon], i) => {
        return (
          <Avatar key={i} alt={type}>
            {icon}
          </Avatar>
        );
      })}
    </Box>
  );
}

PokemonTypes.propTypes = {
  typesIcons: PropTypes.shape({}),
  isClickAble: PropTypes.bool,
  boxStyle: PropTypes.shape({}),
};

PokemonTypes.defaultProps = {
  typesIcons: [],
  isClickAble: false,
  boxStyle: {},
};
