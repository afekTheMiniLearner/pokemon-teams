import React from "react";
import PropTypes from "prop-types";

import { StyledBox } from "./PokemonCardsBox.styled";
import PokemonCard from "../PokemonCard/PokemonCard";

export default function PokemonCardsBox({ pokemonsTeam, ...props }) {
  return (
    <StyledBox {...props}>
      {pokemonsTeam.map((pokemon, i) => {
        const { pokemonName, information, attributes, imageUrl } = pokemon;

        return (
          <PokemonCard
            key={i}
            pokemonName={pokemonName}
            information={information}
            attributes={attributes}
            imageUrl={imageUrl}
          />
        );
      })}
    </StyledBox>
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
