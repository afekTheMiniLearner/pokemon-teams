import React from "react";
import PropTypes from "prop-types";

import { LabeledLoader } from "@base-components";
import { Box, MuiPokemonCard } from "./PokemonCardsBox.styled";

export default function PokemonCardsBox({ pokemonsTeam, ...props }) {
  return (
    <Box {...props}>
      {pokemonsTeam.length ? (
        pokemonsTeam?.map((pokemon, i) => {
          const { pokemonName, information, attributes, types, imageUrl } =
            pokemon;

          return (
            <MuiPokemonCard
              key={i}
              pokemonName={pokemonName}
              information={information}
              attributes={attributes}
              imageUrl={imageUrl}
              types={types}
            />
          );
        })
      ) : (
        <LabeledLoader label="Waiting for you to pick a game . . ." />
      )}
    </Box>
  );
}

PokemonCardsBox.propTypes = {
  pokemonsTeam: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      information: PropTypes.string,
      attributes: PropTypes.shape({
        attack: PropTypes.number,
        defense: PropTypes.number,
        spAttack: PropTypes.number,
        spDefense: PropTypes.number,
        health: PropTypes.number,
      }),
    })
  ),
};

PokemonCardsBox.defaultProps = {
  pokemonsTeam: [],
};
