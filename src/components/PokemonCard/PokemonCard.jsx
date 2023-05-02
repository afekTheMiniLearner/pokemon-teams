import React, { useState } from "react";
import PropTypes from "prop-types";

import { Card } from "@base-components";
import { convertAttributesToContent } from "@utils";
import PokemonChips from "@components/PokemonChips/PokemonChips";
import PokemonTypesChips from "@components/PokemonTypesChips/PokemonTypesChips";

export default function PokemonCard({
  pokemonName,
  information,
  imageUrl,
  attributes,
  types,
}) {
  const [dataType, setDataType] = useState("Basic");

  return dataType === "Basic" ? (
    <Card
      title={pokemonName}
      information={information}
      imageUrl={imageUrl}
      onClick={() => setDataType("Advanced")}
    >
      <PokemonTypesChips types={types} />
    </Card>
  ) : (
    <Card
      title={pokemonName}
      imageUrl={imageUrl}
      onClick={() => setDataType("Basic")}
    >
      <PokemonChips chipsContent={convertAttributesToContent(attributes)} />
    </Card>
  );
}

PokemonCard.propTypes = {
  pokemonName: PropTypes.string,
  information: PropTypes.string,
  imageUrl: PropTypes.string,
  attributes: PropTypes.shape({
    attack: PropTypes.number,
    defense: PropTypes.number,
    spAttack: PropTypes.number,
    spDefense: PropTypes.number,
    health: PropTypes.number,
  }),
  types: PropTypes.arrayOf(PropTypes.string),
};

PokemonCard.defaultProps = {
  pokemonName: "Pokemon",
  information: undefined,
  imageUrl: undefined,
  attributes: {},
  types: [],
};
