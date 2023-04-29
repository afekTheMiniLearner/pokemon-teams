import React, { useState } from "react";
import PropTypes from "prop-types";

import { ChipsBox, Card } from "@base-components";
import { getAttributesArray } from "@utils";

export default function PokemonCard({
  pokemonName,
  information,
  imageUrl,
  pokemonAttr,
}) {
  const [dataType, setDataType] = useState("Basic");

  return dataType === "Basic" ? (
    <Card
      title={pokemonName}
      information={information}
      imageUrl={imageUrl}
      onClick={() => setDataType("Advanced")}
    />
  ) : (
    <Card
      title={pokemonName}
      imageUrl={imageUrl}
      onClick={() => setDataType("Basic")}
    >
      <ChipsBox
        size="small"
        labels={getAttributesArray(pokemonAttr)}
        isClickAble
      />
    </Card>
  );
}

PokemonCard.propTypes = {
  pokemonName: PropTypes.string,
  information: PropTypes.string,
  imageUrl: PropTypes.string,
  pokemonAttr: PropTypes.shape({
    attack: PropTypes.number,
    defense: PropTypes.number,
    spAttack: PropTypes.number,
    spDefense: PropTypes.number,
    health: PropTypes.number,
    total: PropTypes.number,
  }),
};

PokemonCard.defaultProps = {
  pokemonName: "Pokemon",
  information: undefined,
  imageUrl: undefined,
  pokemonAttr: {
    attack: 0,
    defense: 0,
    spAttack: 0,
    spDefense: 0,
    health: 0,
    total: 0,
  },
};
