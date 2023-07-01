import React from "react";
import PropTypes from "prop-types";

import { getTypesProperties } from "@utils";
import { Box, Zoom, IconButton } from "./PokemonTypes.styled";

export default function PokemonTypes({ boxStyle, types, ...props }) {
  const typesProperties = getTypesProperties(types);

  return (
    <Box sx={boxStyle}>
      {typesProperties.map((properties, i) => {
        const { type, icon, style } = properties;

        return (
          <Zoom key={i} in>
            <IconButton
              aria-label={type}
              component="div"
              disableRipple
              sx={style}
              {...props}
            >
              {icon}
            </IconButton>
          </Zoom>
        );
      })}
    </Box>
  );
}

PokemonTypes.propTypes = {
  boxStyle: PropTypes.shape({}),
  types: PropTypes.arrayOf(PropTypes.string),
};

PokemonTypes.defaultProps = {
  boxStyle: {},
  types: [],
};
