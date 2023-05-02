import React from "react";
import PropTypes from "prop-types";

import Avatar from "@mui/material/Avatar";
import { getTypesProperties } from "@utils";
import { Box, Zoom } from "./PokemonTypes.styled";

export default function PokemonTypes({ types, boxStyle }) {
  const typesProperties = getTypesProperties(types);

  return (
    <Box sx={boxStyle}>
      {typesProperties.map((properties, i) => {
        const { type, icon, style } = properties;

        return (
          <Zoom key={i} in>
            <Avatar alt={type} sx={style}>
              {icon}
            </Avatar>
          </Zoom>
        );
      })}
    </Box>
  );
}

PokemonTypes.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string),
  boxStyle: PropTypes.shape({}),
};

PokemonTypes.defaultProps = {
  types: [],
  boxStyle: {},
};
