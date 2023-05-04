import React from "react";
import PropTypes from "prop-types";

import { Box, PokemonCard } from "./PokemonCardsBox.styled";

export default function PokemonCardsBox({ pokemonsTeam, ...props }) {
  return pokemonsTeam.length ? (
    <Box {...props}>
      {pokemonsTeam.map((pokemon, i) => {
        const { pokemonName, information, attributes, types, imageUrl } =
          pokemon;
        return (
          <PokemonCard
            key={i}
            pokemonName={pokemonName}
            information={information}
            attributes={attributes}
            imageUrl={imageUrl}
            types={types}
          />
        );
      })}
    </Box>
  ) : null;
}

PokemonCardsBox.propTypes = {
  pokemonsTeam: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      information: PropTypes.string,
      attributes: PropTypes.shape({
        Attack: PropTypes.number,
        Defense: PropTypes.number,
        SpAtk: PropTypes.number,
        SpDef: PropTypes.number,
        Health: PropTypes.number,
      }),
    })
  ),
};

PokemonCardsBox.defaultProps = {
  pokemonsTeam: [],
};
